// Global Imports
import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Local Import
import { IListItemInDto } from "@Interfaces";
import { ListItemStyle } from "@Styles";

export class ListItemComponent extends React.PureComponent<IListItemInDto, {}> {
	public render(): JSX.Element {
		const {
			onSelectMethod,
			defaultSelected,
			list: { Name },
		} = this.props;
		const itemTextStyle =
			defaultSelected && Name === defaultSelected.Name
				? ListItemStyle.selected
				: ListItemStyle.itemTextStyle;
		return (
			<TouchableOpacity
				style={ListItemStyle.container}
				activeOpacity={0.7}
				onPress={() => onSelectMethod(this.props.list)}
			>
				<View style={ListItemStyle.btnContainer}>
					<Text style={itemTextStyle}>{Name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
