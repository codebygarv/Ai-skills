# Example: OpenAPI Spec Generator

## Input

> "Generate an OpenAPI 3.1 spec for a `POST /api/v1/projects` endpoint that accepts `name` (string) and `description` (optional string) and returns the created project."

## Output

```yaml
openapi: 3.1.0
info:
  title: Project Management API
  version: 1.0.0
paths:
  /api/v1/projects:
    post:
      summary: Create a new project
      operationId: createProject
      tags: [Projects]
      security:
        - BearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateProjectRequest'
      responses:
        '201':
          description: Project created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Project'
        '400':
          description: Validation error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    CreateProjectRequest:
      type: object
      required: [name]
      properties:
        name:
          type: string
          minLength: 3
          example: 'Mobile App Redesign'
        description:
          type: string
          example: 'Q3 cross-platform redesign initiative'
    Project:
      type: object
      required: [id, name, createdAt]
      properties:
        id: { type: string, example: 'prj_982fa1' }
        name: { type: string, example: 'Mobile App Redesign' }
        description: { type: string }
        createdAt: { type: string, format: date-time }
    ErrorResponse:
      type: object
      required: [error, message]
      properties:
        error: { type: string, example: 'INVALID_INPUT' }
        message: { type: string, example: 'Project name must be at least 3 characters.' }
```
