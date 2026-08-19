# Example: Cryptographic Practices Auditor

## Input

> "Review this webhook signature verification:
> function verifyWebhook(signature, payload, secret) {
>   const computed = crypto.createHmac('sha256', secret).update(payload).digest('hex');
>   return signature === computed;
> }"

## Output

### Critical Flaw: Timing Attack Vulnerability
- **Problem**: `signature === computed` performs standard string comparison that returns `false` immediately on the first mismatched byte. An attacker can measure microsecond differences in response time to sequentially guess the valid signature byte-by-byte.

### Secure Remediation
```javascript
function verifyWebhook(signatureHex, payload, secret) {
  const computedHex = crypto.createHmac('sha256', secret).update(payload).digest('hex');

  const sigBuffer = Buffer.from(signatureHex, 'hex');
  const compBuffer = Buffer.from(computedHex, 'hex');

  if (sigBuffer.length !== compBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(sigBuffer, compBuffer);
}
```
