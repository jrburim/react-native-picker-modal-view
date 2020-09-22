import * as React from "react";
import { View, TextInput, TouchableOpacity, PlatformColor } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SearchStyle } from "../Assets/Styles";
export class SearchComponent extends React.PureComponent {
    render() {
        const { SearchInputProps, placeholderTextColor, onClose, setText, forceSelect, searchText, onBackRequest, backButtonDisabled, } = this.props;
        return (React.createElement(View, { style: SearchStyle.searchArea },
            !backButtonDisabled &&
                this.touchableOpacityButton(onBackRequest, "ios-arrow-back", SearchStyle.leftBtn, SearchStyle.backButton),
            React.createElement(TextInput, Object.assign({ placeholder: searchText, placeholderTextColor: placeholderTextColor, style: [
                    SearchStyle.textInput,
                    forceSelect && SearchStyle.nonCloseButton,
                    backButtonDisabled && SearchStyle.nonBackButton,
                ], underlineColorAndroid: "transparent", onChangeText: (text) => setText(text) }, SearchInputProps)),
            !forceSelect &&
                this.touchableOpacityButton(onClose, "ios-close", SearchStyle.leftBtn, SearchStyle.closeButton)));
    }
    touchableOpacityButton(onPress, nameIcon, buttonStyle, imgStyle) {
        return (React.createElement(TouchableOpacity, { onPress: () => onPress(), style: buttonStyle },
            React.createElement(Icon, { name: nameIcon, color: PlatformColor("link"), size: 25 })));
    }
}
//# sourceMappingURL=Search.js.map