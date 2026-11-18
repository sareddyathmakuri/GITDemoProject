# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AfterEach.spec.ts >> LanguageSkills-MouseOverTest @smoke
- Location: tests\AfterEach.spec.ts:45:1

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@name=\'Submit1\']')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - table [ref=e2]:
    - rowgroup [ref=e3]:
      - row [ref=e4]:
        - cell [ref=e5]
        - cell [ref=e7]
  - table [ref=e8]:
    - rowgroup [ref=e9]:
      - row [ref=e10]:
        - cell [ref=e11]:
          - table [ref=e12]:
            - rowgroup [ref=e13]:
              - row [ref=e14]:
                - cell [ref=e15]
                - cell [ref=e16]
                - cell [ref=e17]
                - cell [ref=e18]
                - cell [ref=e19]
                - cell [ref=e20]
  - generic [ref=e21]:
    - table [ref=e22]:
      - rowgroup [ref=e23]:
        - row [ref=e24]:
          - cell [ref=e25]
          - cell [ref=e26]:
            - table [ref=e27]:
              - rowgroup [ref=e28]:
                - row [ref=e29]:
                  - cell [ref=e30]
                  - cell [ref=e31]:
                    - table [ref=e33]:
                      - rowgroup [ref=e34]:
                        - row [ref=e35]:
                          - cell [ref=e36]
                          - cell [ref=e37]
                        - row [ref=e38]:
                          - cell "Login Name :" [ref=e39]
                          - cell [ref=e40]:
                            - textbox [ref=e41]: sureshit
                        - row [ref=e42]:
                          - cell "Password :" [ref=e43]
                          - cell [ref=e44]:
                            - textbox [active] [ref=e45]: sureshit
                        - row [ref=e46]:
                          - cell [ref=e47]:
                            - button "Login" [ref=e48]
                          - cell [ref=e49]:
                            - button "Clear" [ref=e50]
                        - row [ref=e51]:
                          - cell [ref=e52]
                          - cell [ref=e53]:
                            - strong [ref=e54]
                  - cell [ref=e55]
                  - cell [ref=e57]
                - row [ref=e58]:
                  - cell [ref=e59]
                - row [ref=e60]:
                  - cell [ref=e61]
                - row [ref=e62]:
                  - cell [ref=e63]
                  - cell [ref=e65]
                - row [ref=e66]:
                  - cell [ref=e67]
                  - cell [ref=e68]:
                    - table [ref=e69]:
                      - rowgroup [ref=e70]:
                        - row [ref=e71]:
                          - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=e72]
                - row [ref=e73]:
                  - cell [ref=e74]
                  - cell [ref=e76]
                - row [ref=e77]:
                  - cell [ref=e78]
                  - cell [ref=e79]
                - row [ref=e80]:
                  - cell [ref=e81]
                  - cell [ref=e82]
                  - cell [ref=e83]
                  - cell [ref=e84]
                  - cell [ref=e85]
                  - cell [ref=e86]
          - cell [ref=e87]
    - table [ref=e88]:
      - rowgroup [ref=e89]:
        - row [ref=e90]:
          - cell [ref=e91]:
            - link "SureshIT" [ref=e92] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | // This hook runs BEFORE every single test in the file
  4  | test.beforeEach('Global', async ({ page }) => 
  5  | {
  6  |  // 1. Navigate to the base application URL
  7  |  let url : string = "https://ctcorphyd.com/SureshIT/login.php";
  8  |  await page.goto(url);
  9  |  console.log("Application Opened");
  10 |  // 2. Perform common prerequisite actions (e.g., Logging in)
  11 |  let username : string = "sureshit";
  12 |  let password : string = "sureshit";
  13 |  await page.locator("//input[@name='txtUserName']").fill(username);
  14 |  await page.locator("//input[@name='txtPassword']").fill(password);
  15 |  await page.waitForTimeout(3000);
  16 |  console.log("Username and Password entered");
  17 |  // Click on the login button
> 18 |  await page.locator("//input[@name='Submit1']").click();
     |                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |  await page.waitForTimeout(3000);
  20 |  console.log("Login completed");
  21 |  await page.screenshot({ path: 'C:\\Users\\Lahari\\Desktop\\Playwright_Practice\\full-page.png', fullPage: true });
  22 | });
  23 | 
  24 | //This hook runs AFTER every single test in the file
  25 | test.afterEach("My Custom Title", async ({ page }) => 
  26 | {
  27 |  const currentTitle = test.info().title;
  28 |  console.log(`Finished ${test.info().title} with status ${test.info().status}`);
  29 |  console.log("After Each Completed");
  30 |  console.log(currentTitle);
  31 |  if (test.info().status !== test.info().expectedStatus)
  32 |  {
  33 |   console.log(`Did not run as expected, ended up at ${page.url()}`);
  34 |  }
  35 | });
  36 | 
  37 | // Test Case 1: Will run after the beforeEach hook completes
  38 | test('User can navigate to the dashboard', { tag: '@regression'}, async ({ page }) => 
  39 | {
  40 |  await expect(page).toHaveURL('https://ctcorphyd.com/SureshIT/index.php');
  41 |  await expect(page.getByRole('listitem').filter({ hasText: 'Welcome sureshit' })).toBeVisible();
  42 | });
  43 | 
  44 | // Test Case 2: Will run after the beforeEach hook completes
  45 | test("LanguageSkills-MouseOverTest @smoke",async({page})=>
  46 | {   
  47 |  await page.getByText('Admin', { exact: true }).hover();
  48 |  await page.waitForTimeout(2000);
  49 |  await page.getByText('Skills',{exact: true}).first().hover(); 
  50 |  await page.waitForTimeout(2000);
  51 |  await page.getByText('Languages',{exact: true}).hover();
  52 |  await page.waitForTimeout(2000);
  53 |  await page.getByText('Languages',{exact: true}).click();
  54 |  console.log("Languages menuitem has been clicked");
  55 | });
  56 | 
  57 | // Test Case 3: Will run after the beforeEach hook completes
  58 | test ('PIM-MouseoverTest', async ({ page }) =>
  59 | {
  60 |  await page.getByText('PIM').highlight();
  61 |  await page.getByText('PIM').hover();
  62 |  await page.waitForTimeout(3000);
  63 |  await page.getByText('Add Employee').click();
  64 |  await page.waitForTimeout(3000);
  65 | });
```