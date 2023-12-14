import { Selector } from 'testcafe';

fixture(`Login Test`)
    .page(`http://15.156.242.8/login`)
    .skipJsErrors(true);

test('Login with valid credentials', async t => {
    
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const submitButton = Selector('body > div.container.h-100.d-flex.justify-content-center.align-items-center.flex-row > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button');
    const dashboardElement = Selector('.col-sm-6 h1.m-0').withText('Dashboard');
    // Enter username and password
    await t.typeText(usernameInput, 'pritam123');
    await t.typeText(passwordInput, 'Password@123');
    await t.click(submitButton);
    await t.wait(5000)
    await t.expect(dashboardElement.exists).ok();
    //const dashboardText = await dashboardElement.innerText;
    console.log("dashboard",await dashboardElement.innerText);
   
   
});
