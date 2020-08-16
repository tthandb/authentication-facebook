
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Facebook from "expo-facebook";
export default function MainScreen(props) {
	return (
		<View style={styles.container}>
				<Text>Main</Text>
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
