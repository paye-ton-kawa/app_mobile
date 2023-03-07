import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "@navigation/home"
import Products from "@navigation/products"
import { View } from "react-native"
import { Octicons } from "@expo/vector-icons"

const HomeTabs = createBottomTabNavigator()
const screenOptions = {
	tabBarStyle: {
		borderTopWidth: 0,
		marginTop: 15,
	},
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
					<View>
						<Octicons
							name="apps"
							size={size}
							color={color}
						/>
					</View>
				)
			},
		},
	},
	{
		name: "Products",
		component: Products,
		options: {
			tabBarIcon: ({ color, size, focused }) => {
				return (
					<View>
						<Octicons
							name="list-unordered"
							size={size}
							color={color}
						/>
					</View>
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
