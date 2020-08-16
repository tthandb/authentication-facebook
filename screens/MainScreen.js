import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	AsyncStorage
} from "react-native";
import * as Facebook from "expo-facebook";
export default function MainScreen(props) {
	const handleLogOut = async () => {
		await AsyncStorage.removeItem("@token");
		props.navigation.navigate("Login");
		console.log("Log out");
	};
	return (
		<View style={styles.container}>
			<Text>Main</Text>
			<TouchableOpacity onPress={handleLogOut}>
				<Text>Log out</Text>
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
