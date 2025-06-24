# Project Name

## Installation

Install dependencies:

```bash
pnpm install
```

## Reproduction

To check the issue

```bash
pnpm run dev
```

Then open the web page and try to make a fetch request without and with the header.

## Known Issues

- **Vite Worker Fetch Requests**: Vite workers cannot make fetch requests without a "host" header in the request. The host can be a random string. This issue doesn't occur when you bind workers together using `auxiliaryWorkers` in the Vite configuration. However, problems arise when running workers separately.
