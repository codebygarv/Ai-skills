# Example: JWT Security Hardener

## Input

> "Review this token verification:
> jwt.verify(token, secretKey, (err, decoded) => { ... });"

## Output

### Vulnerability Identified: Missing Algorithm Whitelist & Claim Validation
- If the token payload has `"alg": "HS256"` but the server expects RS256, an attacker can sign a token using the server's public key as an HMAC secret, bypassing signature verification.

### Hardened Verification Code
```typescript
import jwt from 'jsonwebtoken';

export function verifyAccessToken(token: string, publicKey: string) {
  return jwt.verify(token, publicKey, {
    algorithms: ['RS256'],               // Block algorithm confusion
    issuer: 'https://auth.example.com',  // Enforce expected issuer
    audience: 'https://api.example.com', // Enforce expected audience
    maxAge: '15m',                       // Strict expiration limit
    complete: false,
  });
}
```
