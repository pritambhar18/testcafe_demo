fixture("my first test")
    .page("https://www.google.com/");

    test("1st test case", async t => {
        await t.typeText('#APjFqb',"What is testing")
        await t.click(".gNO89b")
        await t.wait(2000)

    });

    test("2nd test case", async t => {

    });
