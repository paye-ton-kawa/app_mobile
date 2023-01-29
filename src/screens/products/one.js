import { View, Text } from "react-native"
import React from "react"

const One = ({ route }) => {
	const { idProduct } = route.params
	return (
		<View>
			<Text>{idProduct}</Text>
		</View>
	)
}

export default One
