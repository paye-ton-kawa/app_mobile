import { AsyncStorage } from "react-native"

const saveData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value)
		console.log("Data saved successfully")
	} catch (error) {
		console.log("Error while saving data:", error)
	}
}

const retrieveData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			console.log("Data retrieved successfully")
			return value
		}
	} catch (error) {
		console.log("Error while retrieving data:", error)
	}
}

const deleteData = async (key) => {
	try {
		await AsyncStorage.removeItem(key)
		console.log("Data removed successfully")
	} catch (error) {
		console.error("Error removing data", error)
	}
}

export { saveData, retrieveData, deleteData }
