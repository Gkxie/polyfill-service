"use strict";
const express = require('express')
const app = express()

const compression = require("compression");
const notFoundHandler = (request, response) => {
	response.status(404);
	response.set({
		"Cache-Control": "max-age=30, public, s-maxage=31536000, stale-while-revalidate=604800, stale-if-error=604800",
		"Content-Type": "text/html; charset=UTF-8",
		"Surrogate-Key": "polyfill-service"
	});
	response.send("Not Found");
};

require('./routes/polyfill')(app)
app.use(compression({ level: 9 }));
app.use(notFoundHandler);
app.listen(8080)
