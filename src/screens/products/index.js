import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import All from "./all"
import One from "./one"

const Stack = createNativeStackNavigator()
const screenOptions = {
	headerShown: false,
}

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
			title: null,
		},
	},
]
const ProductsScreen = () => {
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
