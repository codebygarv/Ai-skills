# Example: GraphQL Schema Designer

## Input

> "Design a GraphQL schema for a project management board where a Project has Columns, and Columns have Cards with assignees."

## Output

```graphql
type Project {
  id: ID!
  name: String!
  columns: [ProjectColumn!]!
  createdAt: DateTime!
}

type ProjectColumn {
  id: ID!
  title: String!
  cards(first: Int = 20, after: String): CardConnection!
}

type CardConnection {
  edges: [CardEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type CardEdge {
  cursor: String!
  node: Card!
}

type Card {
  id: ID!
  title: String!
  description: String
  assignee: User
  position: Float!
}

input MoveCardInput {
  cardId: ID!
  destinationColumnId: ID!
  newPosition: Float!
}

type MoveCardPayload {
  card: Card
  userErrors: [UserError!]!
}
```
