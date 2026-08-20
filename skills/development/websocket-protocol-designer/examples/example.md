# Example: WebSocket Protocol Designer

## Input

> "Design a WebSocket protocol for a real-time collaborative whiteboard."

## Output

### Standard Message Frame
```json
{
  "v": 1,
  "id": "msg_01j8k9...",
  "type": "DRAW_STROKE",
  "room": "room_canvas_42",
  "ts": 1724059200000,
  "data": {
    "tool": "pen",
    "color": "#4f46e5",
    "points": [[120, 340], [122, 342]]
  }
}
```

### Heartbeat & Reconnection Protocol
1. **Ping/Pong**: Client sends `{"type":"PING"}` every 25s; server responds with `{"type":"PONG"}`. If no response within 5s, client terminates socket and reconnects.
2. **Reconnection Catch-Up**:
   - Client sends: `{"type":"JOIN", "room":"room_canvas_42", "lastSeq": 842}`.
   - Server fetches missed messages from Redis Stream `room:room_canvas_42` from ID 842 and replays them before subscribing to live broadcast.
