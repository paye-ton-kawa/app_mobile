import React, { useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "@navigation/home"
import Products from "@navigation/products"
import { View } from "react-native"
import { Octicons } from "@expo/vector-icons"
import Register from "@screens/auth/register/Register"

const HomeTabs = createBottomTabNavigator()
const Stack = createStackNavigator()

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
	const [loggedIn, setLoggedIn] = useState(false)
	const [loginToken, setLoginToken] = useState(null)

	useEffect(() => {
		const getLoginToken = async () => {
			const token = await AsyncStorage.getItem("loginToken")
			setLoginToken(token)
		}
		getLoginToken()
	}, [])

	useEffect(() => {
		const handleTokenChange = () => {
			// Perform any action you want when the token changes
			console.log("Login token has been modified:", loginToken)
			setLoggedIn(loginToken !== null)
		}

		handleTokenChange()
	}, [loginToken])

	if (loggedIn) {
		// if the user is logged in, render the navigation tabs
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
	} else {
		// if the user is not logged in, render the login screen
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Sign In"
					component={Register}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		)
	}
}

export default Main
