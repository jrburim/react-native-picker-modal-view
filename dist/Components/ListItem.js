import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ListItemStyle } from "../Assets/Styles";
export class ListItemComponent extends React.PureComponent {
    render() {
        const { onSelectMethod, defaultSelected, list: { Name }, } = this.props;
        const itemTextStyle = defaultSelected && Name === defaultSelected.Name
            ? ListItemStyle.selected
            : ListItemStyle.itemTextStyle;
        return (React.createElement(TouchableOpacity, { style: ListItemStyle.container, activeOpacity: 0.7, onPress: () => onSelectMethod(this.props.list) },
            React.createElement(View, { style: ListItemStyle.btnContainer },
                React.createElement(Text, { style: itemTextStyle }, Name))));
    }
}
//# sourceMappingURL=ListItem.js.map