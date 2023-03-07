import Main from "@navigation/main"
import { NavigationContainer } from "@react-navigation/native"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<ApplicationProvider
					{...eva}
					theme={eva.light}
				>
					<StatusBar barStyle="light-content" />
					<Main />
				</ApplicationProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
