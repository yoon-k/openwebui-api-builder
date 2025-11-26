from pydantic import BaseModel, Field
from typing import Optional, List
from enum import Enum

class APIStyle(str, Enum):
    REST = "rest"
    GRAPHQL = "graphql"
    GRPC = "grpc"

class HTTPMethod(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"

class Framework(str, Enum):
    FASTAPI = "fastapi"
    FLASK = "flask"
    EXPRESS = "express"
    DJANGO = "django"
    SPRING = "spring"
    NESTJS = "nestjs"
    GIN = "gin"
    RAILS = "rails"

class APIDesignRequest(BaseModel):
    description: str = Field(..., description="API description")
    api_style: APIStyle = Field(default=APIStyle.REST)
    framework: Framework = Field(default=Framework.FASTAPI)
    entities: List[str] = Field(default_factory=list, description="Main entities/resources")
    features: List[str] = Field(default_factory=list, description="Required features")
    language: str = Field(default="en")

class EndpointGenerateRequest(BaseModel):
    resource: str = Field(..., description="Resource name")
    method: HTTPMethod = Field(default=HTTPMethod.GET)
    framework: Framework = Field(default=Framework.FASTAPI)
    description: str = Field(default="")
    include_auth: bool = Field(default=True)
    include_validation: bool = Field(default=True)
    language: str = Field(default="en")

class SchemaGenerateRequest(BaseModel):
    description: str = Field(..., description="Data model description")
    format: str = Field(default="openapi", description="openapi, jsonschema, graphql, protobuf")
    entities: List[str] = Field(default_factory=list)
    language: str = Field(default="en")

class DocumentationRequest(BaseModel):
    api_spec: str = Field(..., description="API specification or code")
    format: str = Field(default="markdown", description="markdown, openapi, swagger")
    include_examples: bool = Field(default=True)
    language: str = Field(default="en")

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    context: Optional[str] = None
    history: List[ChatMessage] = Field(default_factory=list)
    language: str = Field(default="en")
