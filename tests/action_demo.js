fixture("Action Demo")
    .page("https://trytestingthis.netlify.app/");

    test("Click actions", async t => {
        await t.click("body > div.navbar > a:nth-child(1)")
        .wait(2000)
        .click("body > div.navbar > a:nth-child(2)")
        .wait(4000)
        const results = await Selector('body > div.header > h1')
        const test = await results.innerText
        console.log(results)

    });