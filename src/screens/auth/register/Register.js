import React, { useState, useEffect } from "react"
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import { saveData } from "@services/utils/asyncStorage"

const Register = () => {
	const [email, setEmail] = useState("")
	const [loginToken, setLoginToken] = useState(null)
	const [showScanner, setShowScanner] = useState(false)
	const [qrCode, setQRCode] = useState("")
	const [hasPermission, setHasPermission] = useState(null)

	const handleBarCodeScanned = ({ data }) => {
		setQRCode(data)
		setShowScanner(false)
	}

	const handleRegister = () => {
		// fetch("https://example.com/register", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ email }),
		// })
		// 	.then((response) => {
		// 		response?.json()
		// 		return { token: "prout" }
		// 	})
		// 	.then((data) => {
		// 		setLoginToken(data?.token)
		// 		setShowScanner(true)
		// 	})
		// 	.catch((error) => console.log("error", error))
		Alert.alert(
			"Un email vous a été envoyé à l'adresse suivante:" + email,
			"Ce mail contient un QR code à scanner pour valider votre inscription.",
			[
				{
					text: "Ouvrir la caméra",
					onPress: () => {
						setShowScanner(true)
					},
				},
			],
			{ cancelable: false }
		)
	}

	useEffect(() => {
		const getPermissions = async () => {
			const { granted } = await BarCodeScanner.getPermissionsAsync()
			granted && setHasPermission(granted)
		}
		getPermissions()
	}, [])

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === "granted")
		}

		showScanner && getBarCodeScannerPermissions()
	}, [showScanner])

	useEffect(() => {
		qrCode && saveData("loginToken", qrCode)
	}, [qrCode])

	return (
		<View style={styles.container}>
			{showScanner && (
				<>
					{hasPermission === null ? (
						<Text>Requesting for camera permission</Text>
					) : hasPermission === false ? (
						<Text>No access to camera</Text>
					) : (
						<BarCodeScanner
							onBarCodeScanned={qrCode ? undefined : handleBarCodeScanned}
							style={StyleSheet.absoluteFillObject}
						/>
					)}
				</>
			)}

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
						style={[styles.button, { backgroundColor: email ? "#00a1ff" : "#cccccc" }]}
						onPress={handleRegister}
						disabled={!email}
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
