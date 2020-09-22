import { ColorValue, TextInputProps } from "react-native";
export interface ISearch {
    placeholderTextColor: ColorValue;
    onClose: () => void;
    onBackRequest?: () => void;
    forceSelect: boolean;
    setText: (text: string) => void;
    searchText: string;
    SearchInputProps?: TextInputProps;
    backButtonDisabled?: boolean;
}
