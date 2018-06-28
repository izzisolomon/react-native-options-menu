import React from "react";
import { Platform, ActionSheetIOS, UIManager, findNodeHandle, View, TouchableOpacity, Image } from "react-native";

export default class PopupMenu extends React.Component {
    handleClick = index => {
        let options = this.props.options;
        for (var i = 0; i < options.length; i++) {
            if (index === i) {
                if (this.props.actions[i] !== null) {
                    this.props.actions[i]();
                }
            }
        }
    };

    handlePress = () => {
        let options = this.props.options;
        if (Platform.OS === "ios") {
            let destructiveIndex = -1;
            if (this.props.destructiveIndex) {
                destructiveIndex = this.props.destructiveIndex;
            }
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: options,
                    destructiveButtonIndex: destructiveIndex,
                    cancelButtonIndex: options.length - 1
                },
                buttonIndex => {
                    this.handleClick(buttonIndex);
                }
            );
        } else if (Platform.OS === "android") {
            UIManager.showPopupMenu(
                findNodeHandle(this.refs.menu),
                options,
                () => console.log("something went wrong with the popup menu"),
                (e, i) => {
                    this.handleClick(i);
                }
            );
        }
    };
    render() {
        return (
            <View>
                <TouchableOpacity ref={"menu"} onPress={this.handlePress}>
                    <Image source={this.props.button} style={this.props.buttonStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}
