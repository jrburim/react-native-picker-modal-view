// Global Imports
import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Local Imports
import { ISelectBoxProps } from "@Interfaces";
import { SelectBoxStyle } from "@Styles";

export class SelectBoxComponent extends React.PureComponent<
	ISelectBoxProps,
	{}
> {
	public render(): JSX.Element {
		const {
			openModal,
			selectedObject,
			chooseText,
			disabled,
			renderSelectView,
			items,
		} = this.props;
		const selectViewIsDisabled = disabled || !items || items.length === 0;
		if (renderSelectView) {
			return renderSelectView(
				selectViewIsDisabled,
				selectedObject,
				openModal.bind(this)
			);
		}
		return (
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => openModal()}
				style={[
					SelectBoxStyle.pressBtn,
					selectViewIsDisabled && SelectBoxStyle.disabledBtn,
				]}
			>
				<View style={SelectBoxStyle.container}>
					<Text
						style={[
							selectViewIsDisabled
								? SelectBoxStyle.disabledTxt
								: SelectBoxStyle.chooseText,
						]}
					>
						{selectedObject && selectedObject.Name
							? selectedObject.Name
							: chooseText}
					</Text>
					{/* <Icon name={nameIcon} color="#FFFFFF" size={25} />
					<Image source={require('../Assets/Images/down.png')}
						style={[SelectBoxStyle.downBtn, selectViewIsDisabled && SelectBoxStyle.disabledImage]}
					/> */}
				</View>
			</TouchableOpacity>
		);
	}
}
