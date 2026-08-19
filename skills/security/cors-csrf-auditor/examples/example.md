# Example: CORS and CSRF Auditor

## Input

> "Review this Express CORS config:
> app.use(cors({ origin: (origin, cb) => cb(null, true), credentials: true }));"

## Output

### Critical Security Vulnerability: Dynamic Origin Reflection with Credentials
- **Issue**: Reflecting `cb(null, true)` allows any malicious website (e.g. `evil.com`) to make authenticated cross-origin requests using the victim's session cookies and read the response.

### Hardened Configuration
```javascript
const allowedOrigins = new Set([
  'https://app.example.com',
  'https://admin.example.com',
]);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
  maxAge: 86400, // 24 hours
}));
```
