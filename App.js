import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import LoadingScreen from "./screens/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Loading" component={LoadingScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Main" component={MainScreen} />
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
