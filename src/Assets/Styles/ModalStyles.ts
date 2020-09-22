// Global Imports
//@ts-ignore
import { StyleSheet, ViewStyle, PlatformColor } from "react-native";

// Local Imports

export const ModalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: PlatformColor("systemBackground"),
	} as ViewStyle,
	listArea: {
		flex: 1,
		flexDirection: "row",
	} as ViewStyle,
	keyboardContainer: {
		flex: 1,
		flexDirection: "row",
	} as ViewStyle,
});
