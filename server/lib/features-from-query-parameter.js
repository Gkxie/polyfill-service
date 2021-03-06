module.exports = function (features, flags) {
	features = features.split(",");
	flags = flags ? flags.split(",") : [];

	features = features.filter(x => x.length).map(x => x.replace(/[*/]/g, "")); // Eliminate XSS vuln

	return features.sort().reduce((object, feature) => {
		const [name, ...featureSpecificFlags] = feature.split("|");
		object[name] = {
			flags: new Set(featureSpecificFlags.concat(flags))
		};
		return object;
	}, {});
};
