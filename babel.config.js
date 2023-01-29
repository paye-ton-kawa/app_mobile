module.exports = function (api) {
	api.cache(true)
	return {
		presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					extensions: [".ts", ".tsx", ".jsx", ".js", ".json", ".svg", ".jpg"],
					alias: {
						"@assets": "./src/assets",
						"@components": "./src/components",
						"@hooks": "./src/hooks",
						"@navigation": "./src/navigation",
						"@redux": "./src/redux",
						"@res": "./src/res",
						"@screens": "./src/screens",
						"@services": "./src/services",
						"@styles": "./src/styles",
					},
				},
			],
		],
	}
}
