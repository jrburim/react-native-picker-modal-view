// Global Imports
//@ts-ignore
import { StyleSheet, ViewStyle, TextStyle, PlatformColor } from "react-native";

// Local Imports
import { CommonStyle } from "./CommonStyle";

export const ListItemStyle = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		height: CommonStyle.BTN_HEIGHT,
	} as ViewStyle,
	btnContainer: {
		flex: 1,
		marginLeft: 15,
		marginRight: 10,
		paddingVertical: 15,
		borderBottomWidth: 0.5,
		borderBottomColor: PlatformColor("systemGray6"),
	} as ViewStyle,
	itemTextStyle: {
		color: PlatformColor("label"),
	},
	selected: {
		color: PlatformColor("label"),
		fontWeight: "bold",
	} as TextStyle,
});
