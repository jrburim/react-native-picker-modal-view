// Global Imports
import * as React from "react";
import { View, TextInput, TouchableOpacity, PlatformColor } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Local Imports
import { SearchStyle } from "@Styles";
import { ISearch } from "@Interfaces";

export class SearchComponent extends React.PureComponent<ISearch, {}> {
	public render(): JSX.Element {
		const {
			SearchInputProps,
			placeholderTextColor,
			onClose,
			setText,
			forceSelect,
			searchText,
			onBackRequest,
			backButtonDisabled,
		} = this.props;
		return (
			<View style={SearchStyle.searchArea}>
				{!backButtonDisabled &&
					this.touchableOpacityButton(
						onBackRequest,
						"ios-arrow-back",
						SearchStyle.leftBtn,
						SearchStyle.backButton
					)}
				<TextInput
					placeholder={searchText}
					placeholderTextColor={placeholderTextColor}
					style={[
						SearchStyle.textInput,
						forceSelect && SearchStyle.nonCloseButton,
						backButtonDisabled && SearchStyle.nonBackButton,
					]}
					underlineColorAndroid={"transparent"}
					onChangeText={(text: string) => setText(text)}
					{...SearchInputProps}
				/>
				{!forceSelect &&
					this.touchableOpacityButton(
						onClose,
						"ios-close",
						SearchStyle.leftBtn,
						SearchStyle.closeButton
					)}
			</View>
		);
	}
	public touchableOpacityButton(
		onPress,
		nameIcon,
		buttonStyle,
		imgStyle
	): JSX.Element {
		return (
			<TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
				<Icon name={nameIcon} color={PlatformColor("link")} size={25} />
				{/* 				<Image source={imgSrc} style={imgStyle} /> */}
			</TouchableOpacity>
		);
	}
}
