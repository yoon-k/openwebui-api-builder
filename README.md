# AI API Builder

> 🎓 **Reference & Study Project** - This project is created for learning and reference purposes, built as a "Fullstack with AI" collaboration project.

AI-powered API builder for designing REST/GraphQL APIs, generating endpoint code, creating schemas, and documentation. Supports multiple frameworks and LLM providers.

🔗 **[Live Demo](https://yoon-k.github.io/openwebui-api-builder/)**

![Python](https://img.shields.io/badge/Python-3.11+-blue)
![Flask](https://img.shields.io/badge/Flask-3.0+-green)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![i18n](https://img.shields.io/badge/i18n-EN%20|%20KO%20|%20JA-purple)

## Features

### 🎨 API Design
Design complete APIs with AI assistance:
- **REST API** - RESTful resource-based design
- **GraphQL** - Query-based API design
- **gRPC** - High-performance RPC design
- Automatic endpoint generation
- Data model suggestions
- Best practice recommendations

### 🔧 Endpoint Generation
Generate production-ready endpoint code for:
- **FastAPI** (Python)
- **Flask** (Python)
- **Express** (Node.js)
- **Django** (Python)
- **Spring Boot** (Java)
- **NestJS** (TypeScript)
- **Gin** (Go)
- **Rails** (Ruby)

### 📐 Schema Generation
Create schemas in multiple formats:
- **OpenAPI 3.0** - REST API specification
- **JSON Schema** - Data validation
- **GraphQL SDL** - Type definitions
- **Protocol Buffers** - gRPC schemas

### 📝 Documentation
Generate comprehensive API documentation:
- Markdown documentation
- OpenAPI/Swagger specs
- Interactive examples
- Request/response samples

### 💬 API Chat
Interactive assistant for:
- API design patterns
- Authentication strategies
- Best practices
- Troubleshooting

## Quick Start

### One-Command Installation

```bash
git clone https://github.com/yoon-k/openwebui-api-builder.git
cd openwebui-api-builder
cp .env.example .env
# Edit .env with your API key
docker-compose up -d
```

Access at: http://localhost:5000

### Manual Installation

```bash
git clone https://github.com/yoon-k/openwebui-api-builder.git
cd openwebui-api-builder
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python -m app.api
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `LLM_PROVIDER` | openai/ollama/anthropic | `openai` |
| `OPENAI_API_KEY` | OpenAI API key | - |
| `OPENAI_MODEL` | OpenAI model | `gpt-4o-mini` |
| `OLLAMA_HOST` | Ollama server URL | `http://localhost:11434` |
| `OLLAMA_MODEL` | Ollama model | `llama3.2` |

## API Reference

### Design API
```http
POST /api/design
Content-Type: application/json

{
  "description": "E-commerce API with auth and products",
  "api_style": "rest",
  "framework": "fastapi",
  "entities": ["users", "products", "orders"],
  "features": ["auth", "pagination"],
  "language": "en"
}
```

### Generate Endpoint
```http
POST /api/endpoint
Content-Type: application/json

{
  "resource": "products",
  "method": "POST",
  "framework": "fastapi",
  "description": "Create a new product",
  "include_auth": true,
  "include_validation": true,
  "language": "en"
}
```

### Generate Schema
```http
POST /api/schema
Content-Type: application/json

{
  "description": "User management system",
  "format": "openapi",
  "entities": ["User", "Role", "Permission"],
  "language": "en"
}
```

### Generate Documentation
```http
POST /api/documentation
Content-Type: application/json

{
  "api_spec": "@app.get('/users/{id}')\nasync def get_user(id: int): ...",
  "format": "markdown",
  "include_examples": true,
  "language": "en"
}
```

## Technology Stack

### Backend
- **Flask** - Web framework
- **Flask-CORS** - CORS support
- **Pydantic** - Data validation
- **aiohttp** - Async HTTP client
- **Gunicorn** - Production server

### Frontend
- **Vanilla JavaScript** - No framework
- **CSS Variables** - Theming
- **i18n** - Multi-language (EN, KO, JA)

### LLM Providers
- **OpenAI** - GPT-4, GPT-3.5
- **Ollama** - Local LLMs
- **Anthropic** - Claude models

## Project Structure

```
openwebui-api-builder/
├── app/
│   ├── __init__.py
│   ├── api.py
│   ├── models/
│   │   └── api_builder.py
│   ├── services/
│   │   └── llm_service.py
│   └── utils/
├── templates/
│   └── index.html
├── static/
│   ├── css/style.css
│   └── js/app.js
├── docs/
│   └── index.html
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Use Cases

### Backend Developers
- Quick API scaffolding
- Generate boilerplate code
- Learn new frameworks

### API Architects
- Design API structures
- Create specifications
- Document APIs

### Students & Learners
- Understand API patterns
- Learn best practices
- Study different frameworks

## Multi-Language Support

- 🇺🇸 English (EN)
- 🇰🇷 Korean (한국어)
- 🇯🇵 Japanese (日本語)

## License

MIT License

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ Star this repo if it helps you learn API development!
