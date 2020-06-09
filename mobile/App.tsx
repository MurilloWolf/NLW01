import React from "react";
import { AppLoading } from "expo";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./src/routes";
import HomeScreen from "./src/pages/Home";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

export default function App() {
	const [fontsLoaded] = useFonts({
		Ubuntu_700Bold,
		Roboto_400Regular,
		Roboto_500Medium,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar backgroundColor="transparent" barStyle={"dark-content"} />
			<Routes />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
