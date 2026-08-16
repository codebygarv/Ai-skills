# Example: Threat Modeler

## Input

> "Threat model this: we're adding a 'share this document with anyone via link' feature. Anyone with the link can view the document, no login required."

## Output

**Assets:** document contents (potentially sensitive), the sharing-link token itself (acts as the sole access credential).

**Trust boundaries:** (1) the link itself, crossing from "authenticated owner" to "anonymous internet" trust level; (2) the server endpoint serving documents by link token.

**Threats (STRIDE):**

| Threat | STRIDE | Likelihood/Impact | Mitigation |
|---|---|---|---|
| Link token is guessable/enumerable (sequential IDs, short tokens) | Spoofing | High likelihood if tokens aren't high-entropy / Medium-high impact | Use a cryptographically random token, 128+ bits of entropy, not a sequential or short ID. |
| Link gets forwarded/leaked beyond intended recipient, no way to revoke | Information disclosure | High likelihood (links get forwarded) / Impact depends on document sensitivity | Add an explicit "revoke link" action, and consider an optional expiry (e.g. auto-expire after N days). |
| No rate limiting on the link-access endpoint — token brute-forcing | Denial of service / Information disclosure | Low likelihood if token entropy is high, but cheap to mitigate | Rate-limit requests per IP on the document-access-by-token endpoint regardless of token strength — defense in depth. |
| No audit trail of who viewed a shared document | Repudiation | Medium — matters if document sensitivity requires accountability | Log access events (timestamp, IP, user-agent) tied to the link token, so there's a record if the link is later found to have leaked. |

**Top priority, in order:**
1. **Token entropy** — this is the actual access control for the whole feature; a weak token undermines everything else.
2. **Revocation** — without it, a single leak is permanent exposure with no recovery path.
3. Everything else is meaningful defense-in-depth but secondary to those two.
