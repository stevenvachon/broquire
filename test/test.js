"use strict";
const broquire = require("../")(require);
const expect = require("chai").use( require("chai-as-promised") ).expect;
const Nightmare = require("nightmare");

let browser;



// TODO :: https://github.com/segmentio/nightmare/issues/782
Nightmare.action("broquire", function(id, browserValue, done)
{
	// Avoid weird magic with `nightmare.broquire(id)`
	if (done === undefined)
	{
		done = browserValue;
		browserValue = undefined;
	}

	if (browserValue !== undefined)
	{
		this.evaluate_now( function(id, browserValue)
		{
			return window.broquire(id, browserValue);
		}, done, id, browserValue);
	}
	else
	{
		// This avoids `browserValue` being passed as `[null]` (due to serialization?)
		this.evaluate_now( function(id)
		{
			return window.broquire(id);
		}, done, id);
	}
});



describe("Server environment", function()
{
	it("works the same as regular require", function()
	{
		expect( broquire("is-browser") ).to.equal( require("is-browser") );
	});
});



describe("Browser environment", function()
{
	before(() => browser = new Nightmare({ nodeIntegration:false }).goto("file://" + __dirname + "/fixtures/index.html"));



	it("supports undefined value", function()
	{
		let expected = browser.broquire("is-browser");

		return expect(expected).to.eventually.deep.equal( {} );
	});



	it("supports an object value", function()
	{
		let expected = browser.broquire("is-browser", { test:1 });

		return expect(expected).to.eventually.deep.equal({ test:1 });
	});



	it("supports a string value", function()
	{
		let expected = browser.evaluate( function()
		{
			window.someGlobal = { test:4 };
		})
		.then(() => browser.broquire("is-browser", "someGlobal"));

		return expect(expected).to.eventually.deep.equal({ test:4 });
	});
});
