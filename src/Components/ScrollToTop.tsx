// Global Imports
import * as React from "react";
import { TouchableOpacity, Image, PlatformColor } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Local Imports
import { ScrollToTopStyle } from "@Styles";
import { IScrollToTop } from "@Interfaces";

//PlatformColor("systemBackground")

export class ScrollToTopComponent extends React.PureComponent<
	IScrollToTop,
	{}
> {
	public render(): JSX.Element {
		const { goToUp, stickyBottomButton } = this.props;
		if (stickyBottomButton) {
			return (
				<TouchableOpacity
					onPress={() => goToUp()}
					activeOpacity={0.8}
					style={[
						ScrollToTopStyle.container,
						{ backgroundColor: "#FFFFFF00", bottom: 70 },
					]}
				>
					<Icon
						name={"ios-caret-up-circle-outline"}
						color={PlatformColor("link")}
						size={30}
					/>
				</TouchableOpacity>
			);
		}
		return null;
	}
}
