import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Card, Text } from "@ui-kitten/components"
import { useNavigation } from "@react-navigation/native"

const Footer = (name, price, unit) => (
	<View>
		<View style={styles.footer}>
			<Text
				category="h6"
				style={styles.footerText}
			>
				{name}
			</Text>
			{price && unit && (
				<Text
					category="s1"
					style={styles.footerText}
				>
					{price}
					{unit}
				</Text>
			)}
		</View>
	</View>
)

export default Item = ({ id, name, price, unit, urlPicture, navigateTo }) => {
	const { navigate } = useNavigation()

	return (
		<Card
			style={styles.card}
			footer={Footer(name, price, unit)}
			onPress={() => navigate(navigateTo, { idProduct: id })}
		>
			<Image
				source={{ uri: urlPicture }}
				style={styles.imageCard}
			/>
		</Card>
	)
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		margin: 10,
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	imageCard: {
		width: "100%",
		aspectRatio: 1,
	},
	footer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	footerText: {
		textAlign: "center",
		fontSize: 18,
	},
})
