# Example: Memory Leak Detector

## Input

> "Why is this WebSocket server leaking memory over time?
> const clients = [];
> wss.on('connection', (ws) => {
>   clients.push(ws);
>   ws.on('message', (msg) => broadcast(msg));
> });"

## Output

### Leak Identified
1. **Unbounded Array Growth**: `clients` array pushes every connecting socket, but never removes them on `ws.on('close')`.
2. **Retained Closures**: The array keeps hard references to closed sockets, buffers, and all attached event handlers, preventing V8 garbage collection.

### Remediation
```javascript
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  
  ws.on('close', () => {
    clients.delete(ws);
  });

  ws.on('message', (msg) => {
    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    }
  });
});
```
