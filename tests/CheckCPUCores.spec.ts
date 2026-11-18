import { test } from '@playwright/test';
//Using TypeScript
import { platform, homedir, cpus } from 'os';
test('CPU Cores Check', async ({ page }) => {
  console.log(cpus().length);
});

/*
//Using JavaScript
const os = require('os'); //This is similar to import { platform, homedir, cpus } from 'os';
test('CPU Cores Check', async ({ page }) => {
  console.log(os.cpus().length);
});
*/