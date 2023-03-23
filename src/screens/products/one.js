import { Text, ScrollView, ImageBackground, View, TouchableHighlight } from "react-native"
import React, { useEffect, useState } from "react"
import { oneStyles } from "./styles"
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WebView from "react-native-webview"

const NavigatorStack = createNativeStackNavigator()

const OneScreen = ({ route }) => {
	return (
		<NavigatorStack.Navigator>
			<NavigatorStack.Screen
				name="OneProduct"
				component={One}
				initialParams={{ idProduct: route.params.id }}
				options={{
					headerShown: false,
				}}
			/>
			<NavigatorStack.Screen
				name="ARscreen"
				component={ARscreen}
				options={{
					headerShown: false,
					presentation: "modal",
				}}
			/>
		</NavigatorStack.Navigator>
	)
}

const One = ({ route, navigation }) => {
	const { idProduct } = route.params
	const [data, setData] = useState(null)

	function getData(id) {
		// fetch data from API
		setData({
			imageSrc: "https://picsum.photos/400/300",
			title: "Title",
			description:
				"Esse enim est officia voluptate nulla officia laboris minim sit. Sint deserunt velit velit culpa deserunt cillum dolor. Aute elit ut eiusmod aliquip consequat in quis dolor pariatur. Aliquip ad nisi in reprehenderit nulla deserunt minim culpa minim eiusmod nulla. Ut labore tempor velit consequat commodo commodo exercitation. Mollit ad nostrud dolore et dolor ea deserunt sint sunt culpa enim quis labore quis minim. Esse dolor duis ut eu incididunt ex tempor. Enim ex reprehenderit Lorem sit consequat nisi excepteur id quis.",
		})
	}

	useEffect(() => {
		getData(idProduct)
	}, [])

	return data ? (
		<ScrollView style={[oneStyles.container]}>
			<ImageBackground
				source={{ uri: data.imageSrc }}
				style={oneStyles.image}
			>
				<TouchableHighlight
					underlayColor="rgba(200, 200, 200, 1)"
					onPress={() => navigation.navigate("ARscreen")}
					style={oneStyles.arButton}
				>
					<MaterialCommunityIcons
						name="cube-scan"
						size={32}
						color="black"
					/>
				</TouchableHighlight>
			</ImageBackground>
			<Text style={oneStyles.title}>{data.title}</Text>
			<Text style={oneStyles.description}>{data.description}</Text>
		</ScrollView>
	) : (
		<Text>Loading...</Text>
	)
}

export default OneScreen

const ARscreen = ({ navigation }) => {
	return (
		<View style={oneStyles.webView}>
			<WebView
				source={{ uri: "https://ar-app-three.vercel.app" }}
				style={{ marginTop: 24, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
			/>
			<View
				style={{
					position: "absolute",
					top: 8,
					width: "100%",
				}}
			>
				<TouchableHighlight
					underlayColor="transparent"
					onPress={() => navigation.navigate("OneProduct")}
				>
					<View
						style={{
							paddingTop: 8,
							backgroundColor: "white",
							width: 150,
							borderRadius: 50,
							borderWidth: 1,
							borderColor: "rgba(0, 0, 0, 0.25)",
							marginLeft: "auto",
							marginRight: "auto",
						}}
					/>
				</TouchableHighlight>
			</View>
		</View>
	)
}
