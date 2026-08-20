---
name: websocket-protocol-designer
description: Designs robust real-time bidirectional WebSocket/SSE protocols with heartbeat ping/pong, reconnect backoff, and auth.
---

## Purpose

Architect reliable, low-overhead real-time messaging protocols over WebSockets or Server-Sent Events (SSE), incorporating connection lifecycle handshakes, heartbeat ping/pong keep-alives, exponential reconnect backoff, channel multiplexing, and reconnection state recovery.

## When to Use

- Building real-time collaborative editors, live chat, trading dashboards, or notification feeds.
- Fixing zombie WebSocket connections that silently drop behind NAT firewalls.
- Implementing message ordering and missed message replay after temporary disconnection.

## What to Analyze

1. **Protocol Selection**: WebSocket (bidirectional) vs SSE (unidirectional server-to-client with native HTTP/2 multiplexing).
2. **Frame Format**: Lightweight JSON envelopes vs Binary MessagePack/Protobuf for high-frequency data.
3. **Heartbeat & Liveness**: 30-second ping/pong frames to detect dead sockets through intermediate proxies.
4. **Reconnection & Catch-Up**: Client reconnects with `last_event_id`; server streams missed events from Redis buffer.
5. **Authentication & Authorization**: Ticket-based token exchange during connection handshake vs query param auth.

## Output Format

- **Message Envelope JSON Schema**: Standard frame format (`type`, `channel`, `id`, `payload`, `ack`).
- **Connection State Machine**: Client connection lifecycles (`CONNECTING`, `CONNECTED`, `RECONNECTING`, `CLOSED`).
- **Server/Client Implementation Snippets**: TypeScript / Node / Go socket handler with ping/pong management.

## Avoid

- Authenticating sockets by passing static JWT tokens in URL query strings (leaks into proxy access logs).
- Missing backpressure controls when broadcasting to slow mobile clients.
