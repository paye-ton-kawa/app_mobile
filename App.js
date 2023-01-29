import Main from "@navigation/main"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Main />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
