import { View, Text } from "react-native"
import React from "react"
import styles from "./styles"

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 40,
					fontWeight: "bold",
					color: "black",
					paddingHorizontal: 20,
				}}
			>
				Les dernieres actualités !
			</Text>
		</View>
	)
}

export default HomeScreen
