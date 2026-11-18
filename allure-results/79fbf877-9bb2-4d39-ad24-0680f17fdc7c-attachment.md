# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckCPUCores.spec.ts >> CPU Cores Check
- Location: tests\CheckCPUCores.spec.ts:2:1

# Error details

```
TypeError: require(...).CPUCores is not a function
```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | test('CPU Cores Check', async ({page}) => 
  3 | {
> 4 |  console.log(require('os').CPUCores().length);
    |                            ^ TypeError: require(...).CPUCores is not a function
  5 | });
```