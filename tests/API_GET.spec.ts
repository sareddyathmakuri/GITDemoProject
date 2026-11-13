import test from '@playwright/test';
test('Get Products  @regression @smoke',  async({request}) =>
{
 const productDetails = await request.get('https://reqres.in/api/collections/products/',
    {
        headers: {'x-api-key':'free_user_3IDhiJWZy13tFqXgzBudyHL2N7K'}
    });
 
 console.log(productDetails.status());
 console.log(productDetails.statusText());
 console.log(await productDetails.json());
});