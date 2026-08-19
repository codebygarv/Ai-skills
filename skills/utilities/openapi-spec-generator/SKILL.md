---
name: openapi-spec-generator
description: Generates valid, expressive OpenAPI 3.1 specifications from code handlers, route declarations, and data schemas.
---

## Purpose

Extract and synthesize accurate, production-grade OpenAPI 3.1 / Swagger YAML specifications directly from route definitions, request/response models, validation schemas (Zod, Joi, Pydantic), and controller code.

## When to Use

- Documenting REST APIs for external developer consumption.
- Generating interactive Swagger UI or Redoc documentation portals.
- Setting up automated SDK generation (via openapi-generator / stainless).

## What to Analyze

1. **Path & Operation Metadata**: HTTP Method, summary, description, tags, and `operationId`.
2. **Parameters**: Path parameters (`{id}`), query parameters with types and defaults, and headers.
3. **Request Body Schema**: Content types (`application/json`), required fields, examples, and nested object types.
4. **Response Status Codes**: 200/201 Success payloads, 400 Bad Request validation schemas, 401/403 Auth errors, 404 Not Found.
5. **Security Schemes**: Bearer JWT (`http`), API Key (`apiKey`), or OAuth2 flows.

## Output Format

- **OpenAPI 3.1.0 YAML**: Valid, lint-clean specification document.
- **Reusable Component Schemas**: `components/schemas` to eliminate JSON duplication.
- **Swagger UI Integration Snippet**: Fast setup instructions for documentation rendering.

## Avoid

- Omitting error response definitions (400, 401, 404, 500).
- Hand-writing unstructured mock payloads without schema validation rules.
