# AI API Builder

> 🎓 **Reference & Study Project** - This project is created for learning and reference purposes, built as a "**Fullstack with AI**" collaboration project - not built by a traditional fullstack developer, but through partnership with AI assistance.

AI-powered API builder for designing REST/GraphQL APIs, generating endpoint code, creating schemas, and documentation. Supports multiple frameworks and LLM providers.

> Use this as a reference for:
> - API design patterns (REST, GraphQL, gRPC)
> - Multi-framework code generation
> - OpenAPI/JSON Schema definitions
> - Backend development best practices
>
> 🚀 **Continuous Improvement**: This project is under active development with ongoing enhancements planned.

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

---

## 🔬 Technical Study Guide

### Key Technologies Explained

#### 1. RESTful API Design Principles
Understanding REST architecture for API design.

```python
# RESTful URL Patterns
REST_PATTERNS = {
    # Collection endpoints
    "GET /users": "List all users",
    "POST /users": "Create a new user",

    # Item endpoints
    "GET /users/{id}": "Get specific user",
    "PUT /users/{id}": "Replace user completely",
    "PATCH /users/{id}": "Update user partially",
    "DELETE /users/{id}": "Delete user",

    # Nested resources
    "GET /users/{id}/orders": "List user's orders",
    "POST /users/{id}/orders": "Create order for user",

    # Actions (non-CRUD)
    "POST /users/{id}/activate": "Activate user account",
    "POST /orders/{id}/cancel": "Cancel an order"
}

# HTTP Status Codes
STATUS_CODES = {
    200: "OK - Successful GET/PUT/PATCH",
    201: "Created - Successful POST",
    204: "No Content - Successful DELETE",
    400: "Bad Request - Invalid input",
    401: "Unauthorized - Missing/invalid auth",
    403: "Forbidden - No permission",
    404: "Not Found - Resource doesn't exist",
    409: "Conflict - Resource state conflict",
    422: "Unprocessable Entity - Validation failed",
    500: "Internal Server Error"
}
```

**REST Principles:**
- **Resources**: Everything is a resource with a unique URL
- **Stateless**: Each request contains all needed info
- **Uniform Interface**: Consistent HTTP methods
- **HATEOAS**: Include links to related resources

#### 2. FastAPI Endpoint Generation
Generating type-safe Python endpoints.

```python
FASTAPI_TEMPLATE = '''
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List, Optional

from app.core.deps import get_db, get_current_user
from app.schemas.{resource} import {Resource}Create, {Resource}Response, {Resource}Update
from app.models.user import User
from app.crud import {resource} as crud

router = APIRouter(prefix="/{resource}s", tags=["{resource}s"])

@router.get("/", response_model=List[{Resource}Response])
async def list_{resource}s(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    db: Session = Depends(get_db)
):
    """List all {resource}s with pagination."""
    return crud.get_multi(db, skip=skip, limit=limit)

@router.post("/", response_model={Resource}Response, status_code=status.HTTP_201_CREATED)
async def create_{resource}(
    {resource}_in: {Resource}Create,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Create a new {resource}."""
    return crud.create(db, obj_in={resource}_in, user_id=current_user.id)

@router.get("/{{id}}", response_model={Resource}Response)
async def get_{resource}(
    id: int,
    db: Session = Depends(get_db)
):
    """Get a specific {resource} by ID."""
    {resource} = crud.get(db, id=id)
    if not {resource}:
        raise HTTPException(status_code=404, detail="{Resource} not found")
    return {resource}
'''

def generate_fastapi_endpoint(resource: str, include_auth: bool) -> str:
    code = FASTAPI_TEMPLATE.format(
        resource=resource.lower(),
        Resource=resource.capitalize()
    )
    if not include_auth:
        code = code.replace("current_user: User = Depends(get_current_user)", "")
    return code
```

#### 3. OpenAPI Schema Generation
Creating standardized API specifications.

```python
def generate_openapi_schema(entities: List[str], description: str) -> dict:
    schema = {
        "openapi": "3.0.3",
        "info": {
            "title": f"{description} API",
            "version": "1.0.0",
            "description": f"API specification for {description}"
        },
        "servers": [
            {"url": "https://api.example.com/v1", "description": "Production"},
            {"url": "http://localhost:8000/v1", "description": "Development"}
        ],
        "paths": {},
        "components": {
            "schemas": {},
            "securitySchemes": {
                "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT"
                }
            }
        }
    }

    for entity in entities:
        # Add CRUD paths
        entity_lower = entity.lower()
        schema["paths"][f"/{entity_lower}s"] = generate_collection_paths(entity)
        schema["paths"][f"/{entity_lower}s/{{id}}"] = generate_item_paths(entity)

        # Add schema definitions
        schema["components"]["schemas"][entity] = generate_entity_schema(entity)
        schema["components"]["schemas"][f"{entity}Create"] = generate_create_schema(entity)
        schema["components"]["schemas"][f"{entity}Update"] = generate_update_schema(entity)

    return schema

def generate_entity_schema(entity: str) -> dict:
    return {
        "type": "object",
        "properties": {
            "id": {"type": "integer", "readOnly": True},
            "created_at": {"type": "string", "format": "date-time", "readOnly": True},
            "updated_at": {"type": "string", "format": "date-time", "readOnly": True}
        },
        "required": ["id"]
    }
```

#### 4. GraphQL Schema Design
Type-first API design with GraphQL.

```python
GRAPHQL_TEMPLATE = '''
type Query {{
    {queries}
}}

type Mutation {{
    {mutations}
}}

{types}
'''

def generate_graphql_schema(entities: List[str]) -> str:
    queries = []
    mutations = []
    types = []

    for entity in entities:
        entity_lower = entity.lower()

        # Queries
        queries.extend([
            f"{entity_lower}(id: ID!): {entity}",
            f"{entity_lower}s(limit: Int, offset: Int): [{entity}!]!",
            f"{entity_lower}sCount: Int!"
        ])

        # Mutations
        mutations.extend([
            f"create{entity}(input: {entity}Input!): {entity}!",
            f"update{entity}(id: ID!, input: {entity}Input!): {entity}!",
            f"delete{entity}(id: ID!): Boolean!"
        ])

        # Types
        types.append(f'''
type {entity} {{
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
}}

input {entity}Input {{
    # Add fields here
}}
''')

    return GRAPHQL_TEMPLATE.format(
        queries='\\n    '.join(queries),
        mutations='\\n    '.join(mutations),
        types='\\n'.join(types)
    )
```

#### 5. Authentication Patterns
Common API authentication implementations.

```python
AUTH_PATTERNS = {
    "jwt": '''
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = get_user(user_id)
    if user is None:
        raise credentials_exception
    return user
''',

    "api_key": '''
from fastapi import Security, HTTPException
from fastapi.security import APIKeyHeader

api_key_header = APIKeyHeader(name="X-API-Key")

async def verify_api_key(api_key: str = Security(api_key_header)):
    if api_key not in valid_api_keys:
        raise HTTPException(status_code=403, detail="Invalid API key")
    return api_key
'''
}
```

#### 6. Multi-Framework Code Generation
Generating equivalent code for different frameworks.

```python
FRAMEWORK_PATTERNS = {
    "fastapi": {
        "route": '@router.{method}("/{path}")',
        "response": "response_model={model}",
        "async": True
    },
    "flask": {
        "route": '@app.route("/{path}", methods=["{METHOD}"])',
        "response": "return jsonify({data})",
        "async": False
    },
    "express": {
        "route": 'router.{method}("/{path}", async (req, res) => {{',
        "response": "res.json({data})",
        "async": True
    },
    "django": {
        "route": 'path("{path}/", views.{view_name})',
        "response": "return JsonResponse({data})",
        "async": False
    }
}

def generate_endpoint(resource: str, method: str, framework: str) -> str:
    pattern = FRAMEWORK_PATTERNS.get(framework)
    if not pattern:
        raise ValueError(f"Unknown framework: {framework}")

    # Generate framework-specific code
    templates = load_templates(framework)
    return templates.render(
        resource=resource,
        method=method.lower(),
        is_async=pattern["async"]
    )
```

### Learning Path Recommendations

1. **Beginner**: Start with REST API design principles
2. **Intermediate**: Learn FastAPI/Flask endpoint generation
3. **Advanced**: Implement OpenAPI schema generation
4. **Expert**: Build multi-framework code generators

---

## License

MIT License

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ Star this repo if it helps you learn API development!
