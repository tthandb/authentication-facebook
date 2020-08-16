import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";
export default function LoginScreen(props) {
	const handleLogin = async () => {
		try {
			await Facebook.initializeAsync("285050695281962");
			const {
				type,
				token,
				expires,
				permissions,
				declinedPermissions
			} = await Facebook.logInWithReadPermissionsAsync({
				permissions: ["public_profile"]
			});
			console.log(type, token);	
			if (type === "success") {
				AsyncStorage.setItem("@token", token)
				props.navigation.navigate("Main")

			} else {
			}
		} catch ({ message }) {
			alert(`Facebook Login Error: ${message}`);
		}
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleLogin}>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
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
