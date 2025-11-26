import os
import json
import aiohttp
from abc import ABC, abstractmethod
from typing import Dict, List, Optional

class LLMProvider(ABC):
    @abstractmethod
    async def generate(self, messages: List[Dict], temperature: float = 0.7) -> str:
        pass

class OpenAIProvider(LLMProvider):
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")
        self.model = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
        self.base_url = "https://api.openai.com/v1/chat/completions"

    async def generate(self, messages: List[Dict], temperature: float = 0.7) -> str:
        headers = {"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"}
        payload = {"model": self.model, "messages": messages, "temperature": temperature}
        async with aiohttp.ClientSession() as session:
            async with session.post(self.base_url, headers=headers, json=payload) as resp:
                data = await resp.json()
                return data["choices"][0]["message"]["content"]

class OllamaProvider(LLMProvider):
    def __init__(self):
        self.host = os.getenv("OLLAMA_HOST", "http://localhost:11434")
        self.model = os.getenv("OLLAMA_MODEL", "llama3.2")

    async def generate(self, messages: List[Dict], temperature: float = 0.7) -> str:
        url = f"{self.host}/api/chat"
        payload = {"model": self.model, "messages": messages, "stream": False, "options": {"temperature": temperature}}
        async with aiohttp.ClientSession() as session:
            async with session.post(url, json=payload) as resp:
                data = await resp.json()
                return data["message"]["content"]

class AnthropicProvider(LLMProvider):
    def __init__(self):
        self.api_key = os.getenv("ANTHROPIC_API_KEY")
        self.model = os.getenv("ANTHROPIC_MODEL", "claude-3-haiku-20240307")

    async def generate(self, messages: List[Dict], temperature: float = 0.7) -> str:
        headers = {"x-api-key": self.api_key, "Content-Type": "application/json", "anthropic-version": "2023-06-01"}
        system = next((m["content"] for m in messages if m["role"] == "system"), "")
        user_msgs = [m for m in messages if m["role"] != "system"]
        payload = {"model": self.model, "max_tokens": 4096, "system": system, "messages": user_msgs, "temperature": temperature}
        async with aiohttp.ClientSession() as session:
            async with session.post("https://api.anthropic.com/v1/messages", headers=headers, json=payload) as resp:
                data = await resp.json()
                return data["content"][0]["text"]

class LLMService:
    def __init__(self):
        provider = os.getenv("LLM_PROVIDER", "openai").lower()
        self.providers = {"openai": OpenAIProvider, "ollama": OllamaProvider, "anthropic": AnthropicProvider}
        self.provider = self.providers.get(provider, OpenAIProvider)()

    def _get_lang_instruction(self, lang: str) -> str:
        instructions = {"ko": "한국어로 응답해주세요.", "ja": "日本語で回答してください。", "en": "Respond in English."}
        return instructions.get(lang, instructions["en"])

    async def design_api(self, description: str, api_style: str, framework: str, entities: List[str], features: List[str], lang: str) -> Dict:
        system = f"""You are an expert API architect. Design comprehensive APIs following best practices.
{self._get_lang_instruction(lang)}

Return JSON:
{{
  "api_name": "string",
  "description": "string",
  "base_url": "string",
  "version": "string",
  "endpoints": [
    {{
      "path": "string",
      "method": "string",
      "description": "string",
      "request_body": {{}},
      "response": {{}},
      "auth_required": boolean
    }}
  ],
  "models": [
    {{
      "name": "string",
      "fields": [
        {{"name": "string", "type": "string", "required": boolean, "description": "string"}}
      ]
    }}
  ],
  "auth_scheme": "string",
  "recommendations": ["string"]
}}"""

        user = f"""Design a {api_style.upper()} API using {framework}:
Description: {description}
Entities: {', '.join(entities) if entities else 'Auto-detect from description'}
Features: {', '.join(features) if features else 'Standard CRUD'}"""

        messages = [{"role": "system", "content": system}, {"role": "user", "content": user}]
        response = await self.provider.generate(messages, temperature=0.5)
        try:
            return json.loads(response.strip().removeprefix("```json").removesuffix("```").strip())
        except json.JSONDecodeError:
            return {"design": response, "api_style": api_style, "framework": framework}

    async def generate_endpoint(self, resource: str, method: str, framework: str, description: str, include_auth: bool, include_validation: bool, lang: str) -> Dict:
        system = f"""You are an expert backend developer. Generate production-ready API endpoint code.
{self._get_lang_instruction(lang)}

Return JSON:
{{
  "code": "string (full endpoint code)",
  "imports": ["string"],
  "models": "string (related model/schema code)",
  "tests": "string (test code)",
  "explanation": "string"
}}"""

        user = f"""Generate a {method} endpoint for '{resource}' resource using {framework}.
Description: {description or f'{method} operation for {resource}'}
Include authentication: {include_auth}
Include validation: {include_validation}
Follow RESTful conventions and best practices."""

        messages = [{"role": "system", "content": system}, {"role": "user", "content": user}]
        response = await self.provider.generate(messages, temperature=0.3)
        try:
            return json.loads(response.strip().removeprefix("```json").removesuffix("```").strip())
        except json.JSONDecodeError:
            return {"code": response, "resource": resource, "method": method}

    async def generate_schema(self, description: str, format: str, entities: List[str], lang: str) -> Dict:
        system = f"""You are a data modeling expert. Generate accurate API schemas.
{self._get_lang_instruction(lang)}

Return JSON:
{{
  "schema": "string (the schema in requested format)",
  "format": "string",
  "entities": ["string"],
  "relationships": ["string"],
  "explanation": "string"
}}"""

        user = f"""Generate a {format} schema:
Description: {description}
Entities: {', '.join(entities) if entities else 'Derive from description'}
Include proper types, validations, and relationships."""

        messages = [{"role": "system", "content": system}, {"role": "user", "content": user}]
        response = await self.provider.generate(messages, temperature=0.3)
        try:
            return json.loads(response.strip().removeprefix("```json").removesuffix("```").strip())
        except json.JSONDecodeError:
            return {"schema": response, "format": format}

    async def generate_documentation(self, api_spec: str, format: str, include_examples: bool, lang: str) -> Dict:
        system = f"""You are a technical writer specializing in API documentation.
{self._get_lang_instruction(lang)}

Return JSON:
{{
  "documentation": "string (formatted documentation)",
  "format": "string",
  "sections": ["string"],
  "summary": "string"
}}"""

        user = f"""Generate {format} documentation for this API:
{api_spec}

Include examples: {include_examples}
Make it clear, comprehensive, and developer-friendly."""

        messages = [{"role": "system", "content": system}, {"role": "user", "content": user}]
        response = await self.provider.generate(messages, temperature=0.5)
        try:
            return json.loads(response.strip().removeprefix("```json").removesuffix("```").strip())
        except json.JSONDecodeError:
            return {"documentation": response, "format": format}

    async def chat(self, message: str, context: Optional[str], history: List[Dict], lang: str) -> str:
        system = f"""You are an expert API development assistant. Help with:
- API design patterns (REST, GraphQL, gRPC)
- Backend frameworks (FastAPI, Flask, Express, Django, Spring)
- Authentication & authorization
- Data modeling & schemas
- Documentation & testing
- Best practices & security

{self._get_lang_instruction(lang)}
Be concise, practical, and provide code examples when helpful."""

        messages = [{"role": "system", "content": system}]
        if context:
            messages.append({"role": "user", "content": f"Context: {context}"})
        messages.extend(history[-10:])
        messages.append({"role": "user", "content": message})

        return await self.provider.generate(messages, temperature=0.7)

llm_service = LLMService()
