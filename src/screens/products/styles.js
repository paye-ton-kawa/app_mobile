import { StyleSheet } from "react-native"

export const allStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export const oneStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 350,
		width: "100%",
		objectFit: "cover",
		borderWidth: 1,
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 26,
	},
	description: {
		padding: 16,
		marginHorizontal: 16,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.05)",
		backgroundColor: "rgba(0, 0, 0, 0.09)",
		fontSize: 16,
		textAlign: "justify",
		overflow: "hidden",
	},
	arButton: {
		position: "absolute",
		right: 16,
		bottom: 16,
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderRadius: 50,
		padding: 8,
	},
	webView: {
		flex: 1,
	},
	closeArScreen: {
		backgroundColor: "red",
		borderRadius: 50,
		paddingVertical: 8,
		paddingHorizontal: 16,
		width: "fit-content",
		marginVertical: 8,
		marginLeft: "auto",
		marginRight: "auto",
	},
})
