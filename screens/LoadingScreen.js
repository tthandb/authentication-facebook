import React, { useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	AsyncStorage,
	ActivityIndicator
} from "react-native";
export default function LoginScreen(props) {
	useEffect(() => {
		const getToken = async () => {
			const token = await AsyncStorage.getItem("@token");
			if (token !== null) props.navigation.navigate("Main");
			else props.navigation.navigate("Login");
		};
		setTimeout(getToken, 1000)
	}, []);
	return (
		<View style={styles.container}>
			<ActivityIndicator style="large" />
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
