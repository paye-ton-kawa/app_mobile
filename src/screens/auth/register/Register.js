import React, { useState, useEffect } from "react"
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner"

const Register = () => {
	const [email, setEmail] = useState("")
	const [loginToken, setLoginToken] = useState(null)
	const [showScanner, setShowScanner] = useState(false)
	const [qrCode, setQRCode] = useState("")

	const handleBarCodeScanned = ({ data }) => {
		setQRCode(data)
		setShowScanner(false)
	}

	const handleRegister = () => {
		fetch("https://example.com/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setLoginToken(data?.token)
				setShowScanner(true)
			})
			.catch((error) => console.log(error))
	}

	return (
		<View style={styles.container}>
			{showScanner && <QRCodeScanner onRead={handleBarCodeScanned} />}
			{!showScanner && (
				<>
					<TextInput
						style={styles.input}
						placeholder="Email"
						placeholderTextColor="#aaaaaa"
						onChangeText={(text) => setEmail(text)}
						value={email}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={handleRegister}
					>
						<Text style={styles.buttonTitle}>Register</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ffffff",
	},
	input: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "#aaaaaa",
		borderRadius: 5,
		padding: 10,
		marginVertical: 10,
	},
	button: {
		width: "80%",
		height: 50,
		backgroundColor: "#00a1ff",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	buttonTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#ffffff",
	},
})

export default Register
