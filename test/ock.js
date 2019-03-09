var Buffer = require("buffer/").Buffer;
var should = require("should");
var ock = require("../index.js");

describe("Ock JS", function () {

	it("should be ok", function () {
		(ock).should.be.ok;
	});

	it("should be object", function () {
		(ock).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(ock).should.have.property(property);
		});
	});

});
