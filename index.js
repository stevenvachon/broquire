var isBrowser = require("is-browser");

var isServer = isBrowser === false;



function init(require)
{
	"use strict";

	function broquire(id, browserValue)
	{
		if (isBrowser === true)
		{
			if (browserValue === undefined) return {};

			if (typeof browserValue === "string") return windowProperty(browserValue);

			return browserValue;
		}

		return require(id);
	};

	broquire.isBrowser = isBrowser;
	broquire.isServer = isServer;

	return broquire;
};



function windowProperty(property)
{
	return window[property];
}



module.exports = init;
