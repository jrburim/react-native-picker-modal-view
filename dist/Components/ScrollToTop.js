import * as React from "react";
import { TouchableOpacity, PlatformColor } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollToTopStyle } from "../Assets/Styles";
export class ScrollToTopComponent extends React.PureComponent {
    render() {
        const { goToUp, stickyBottomButton } = this.props;
        if (stickyBottomButton) {
            return (React.createElement(TouchableOpacity, { onPress: () => goToUp(), activeOpacity: 0.8, style: [ScrollToTopStyle.container] },
                React.createElement(Icon, { name: "ios-caret-up-circle-outline", color: PlatformColor("link"), size: 30 })));
        }
        return null;
    }
}
//# sourceMappingURL=ScrollToTop.js.map