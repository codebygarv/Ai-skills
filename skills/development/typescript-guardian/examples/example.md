# Example: TypeScript Guardian

## Input

```ts
function parseConfig(raw: any): any {
  return {
    port: raw.port,
    host: raw.host,
    debug: raw.debug ?? false,
  };
}

interface Config {
  port: number;
  host: string;
  debug: boolean;
}

const config = parseConfig(rawInput) as Config;
```

## Output

**Unsound**
- `parseConfig(raw: any): any` — both the parameter and return type are `any`, so TypeScript verifies nothing about this function's contract. If `rawInput.port` is actually a string (e.g. from a `.env` file or JSON that wasn't validated), `config.port` will silently be typed as `number` downstream while holding a string at runtime — every arithmetic operation on `config.port` becomes a latent bug.
  - Fix: accept `unknown` for the raw input and validate/narrow explicitly:
    ```ts
    function parseConfig(raw: unknown): Config {
      if (typeof raw !== 'object' || raw === null) throw new Error('invalid config');
      const r = raw as Record<string, unknown>;
      if (typeof r.port !== 'number') throw new Error('port must be a number');
      if (typeof r.host !== 'string') throw new Error('host must be a string');
      return { port: r.port, host: r.host, debug: Boolean(r.debug) };
    }
    ```
- `as Config` at the call site — this assertion tells TypeScript to trust the shape without any actual check. Combined with `parseConfig` returning `any` above, there is no point in this entire chain where the real shape of `rawInput` is verified. Once `parseConfig` is fixed to return a real `Config` (as above), this assertion becomes unnecessary and should be removed rather than kept as a redundant, unchecked claim.

**Loose**
- None once the above is fixed — `Config`'s fields are already precise (`number`/`string`/`boolean`, not `string | number` or similar).

**Style**
- Consider `debug: boolean` defaulting via `Boolean(r.debug)` vs. a stricter `r.debug === true` if a truthy-but-not-boolean value (e.g. `debug: "yes"`) should be treated as a config error rather than silently coerced.
