import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Points from "./pages/Points";
import Details from "./pages/Details";

function Routes() {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
				screenOptions={{
					cardStyle: {
						backgroundColor: "#f0f0f5",
					},
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Points" component={Points} />
				<Stack.Screen name="Details" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;
