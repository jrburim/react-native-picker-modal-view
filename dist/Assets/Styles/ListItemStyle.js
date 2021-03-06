import { StyleSheet, PlatformColor } from "react-native";
import { CommonStyle } from "./CommonStyle";
export const ListItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height: CommonStyle.BTN_HEIGHT,
    },
    btnContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: 10,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: PlatformColor("systemGray6"),
    },
    itemTextStyle: {
        color: PlatformColor("label"),
    },
    selected: {
        color: PlatformColor("label"),
        fontWeight: "bold",
    },
});
//# sourceMappingURL=ListItemStyle.js.map