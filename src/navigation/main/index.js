import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "@navigation/home"
import Products from "@navigation/products"
import { Octicons } from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const HomeTabs = createBottomTabNavigator()
const screenOptions = {
	tabBarShowLabel: false,
	headerShown: false,
}
const HomeArray = [
	{
		name: "Home",
		component: Home,
		options: {
			tabBarIcon: ({ color, size }) => {
				return (
					<Octicons
						name="home"
						size={size}
						color={color}
					/>
				)
			},
		},
	},
	{
		name: "Products",
		component: Products,
		options: {
			tabBarIcon: ({ color, size }) => {
				return (
					<Octicons
						name="list-unordered"
						size={size}
						color={color}
					/>
				)
			},
		},
	},
]

const Main = () => {
	return (
		<HomeTabs.Navigator screenOptions={screenOptions}>
			{HomeArray?.map((item, index) => {
				return (
					<HomeTabs.Screen
						key={index}
						name={item.name}
						component={item.component}
						options={item.options}
					/>
				)
			})}
		</HomeTabs.Navigator>
	)
}

export default Main
