import os, asyncio
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv
from app.models import APIDesignRequest, EndpointGenerateRequest, SchemaGenerateRequest, DocumentationRequest, ChatRequest
from app.services import llm_service

load_dotenv()
app = Flask(__name__, template_folder="../templates", static_folder="../static")
CORS(app)

def run_async(coro):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try: return loop.run_until_complete(coro)
    finally: loop.close()

@app.route("/")
def index(): return render_template("index.html")

@app.route("/api/health")
def health(): return jsonify({"status": "healthy", "provider": os.getenv("LLM_PROVIDER", "openai")})

@app.route("/api/design", methods=["POST"])
def design_api():
    try:
        req = APIDesignRequest(**request.get_json())
        return jsonify(run_async(llm_service.design_api(
            req.description, req.api_style.value, req.framework.value,
            req.entities, req.features, req.language
        )))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/endpoint", methods=["POST"])
def generate_endpoint():
    try:
        req = EndpointGenerateRequest(**request.get_json())
        return jsonify(run_async(llm_service.generate_endpoint(
            req.resource, req.method.value, req.framework.value,
            req.description, req.include_auth, req.include_validation, req.language
        )))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/schema", methods=["POST"])
def generate_schema():
    try:
        req = SchemaGenerateRequest(**request.get_json())
        return jsonify(run_async(llm_service.generate_schema(
            req.description, req.format, req.entities, req.language
        )))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/documentation", methods=["POST"])
def generate_documentation():
    try:
        req = DocumentationRequest(**request.get_json())
        return jsonify(run_async(llm_service.generate_documentation(
            req.api_spec, req.format, req.include_examples, req.language
        )))
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        req = ChatRequest(**request.get_json())
        history = [{"role": m.role, "content": m.content} for m in req.history]
        return jsonify({"response": run_async(llm_service.chat(req.message, req.context, history, req.language))})
    except Exception as e: return jsonify({"error": str(e)}), 500

@app.route("/api/frameworks")
def get_frameworks():
    return jsonify({"frameworks": ["fastapi", "flask", "express", "django", "spring", "nestjs", "gin", "rails"]})

@app.route("/api/schema-formats")
def get_schema_formats():
    return jsonify({"formats": ["openapi", "jsonschema", "graphql", "protobuf"]})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=os.getenv("FLASK_DEBUG", "false").lower() == "true")
