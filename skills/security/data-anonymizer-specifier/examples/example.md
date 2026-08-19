# Example: Data Anonymizer Specifier

## Input

> "Specify redaction rules for our PostgreSQL customer table to create a safe staging dump."

## Output

### Database Sanitization SQL (Staging Export)
```sql
UPDATE users
SET 
  email = 'user_' || id || '@staging-anonymized.local',
  first_name = 'UserFirst' || id,
  last_name = 'UserLast' || id,
  phone = '+1555' || LPAD((id % 10000000)::text, 7, '0'),
  password_hash = '$2a$12$DummyStagingPasswordHash...',
  stripe_customer_id = 'cus_mock_' || id,
  ip_address = '127.0.0.1';
```

### Logger Redaction Paths (Pino / Winston)
```javascript
const redactPaths = [
  'req.headers.authorization',
  'req.headers.cookie',
  '*.password',
  '*.creditCard',
  '*.ssn',
  '*.token',
];
```
