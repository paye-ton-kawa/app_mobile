import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"

const Item = ({ id, name, urlPicture, navigateTo }) => {
	const { navigate } = useNavigation()
	return (
		<View style={style.container}>
			<TouchableOpacity
				style={style.item}
				onPress={() => navigate(navigateTo, { idProduct: id })}
			>
				<ImageBackground
					source={{ uri: urlPicture }}
					style={style.ImageBackground}
				>
					<View style={style.innerContainer}>
						<Text style={style.name}>{name}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	)
}

export default Item

const style = StyleSheet.create({
	container: {
		width: "50%",
	},
	item: {
		margin: 5,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "rgba(0,0,0, 0.1)",
		borderRadius: 5,
	},
	ImageBackground: {
		borderRadius: 5,
		overflow: "hidden",
		aspectRatio: 1,
	},
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: "rgba(0,0,0, 0.4)",
	},
	name: { fontSize: 32, fontWeight: "bold", color: "white", textShadowColor: "black" },
})
