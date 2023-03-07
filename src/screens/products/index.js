import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import All from "./all"
import One from "./one"
import { Text, TouchableHighlight, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()

const screenOptions = {
	headerShown: false,
}

const ProductsScreen = () => {
	const insets = useSafeAreaInsets()
	const StackScreens = [
		{
			name: "allProducts",
			component: All,
		},
		{
			name: "oneProduct",
			component: One,
			options: {
				headerShown: true,
				headerTransparent: true,
				header: ({ navigation }) => {
					return (
						<View
							style={{
								marginTop: insets.top + 10,
								backgroundColor: "transparent",
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<TouchableHighlight
								style={{
									marginHorizontal: 24,
									borderRadius: 50,
									paddingVertical: 5,
									paddingHorizontal: 10,
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "royalblue",
								}}
								onPress={navigation.goBack}
							>
								<>
									<Ionicons
										name="arrow-back-circle"
										size={20}
										style={{ marginRight: 5 }}
										color={"white"}
									/>
									<Text
										style={{
											fontWeight: "bold",
											fontSize: 16,
											color: "white",
										}}
									>
										Tous nos produits
									</Text>
								</>
							</TouchableHighlight>
						</View>
					)
				},
			},
		},
	]
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			{StackScreens?.map((item, index) => (
				<Stack.Screen
					key={index}
					name={item.name}
					component={item.component}
					options={item.options}
				/>
			))}
		</Stack.Navigator>
	)
}

export default ProductsScreen
