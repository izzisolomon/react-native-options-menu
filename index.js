import React from "react";
import {
  Platform,
  ActionSheetIOS,
  UIManager,
  findNodeHandle,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";

export default class PopupMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

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

  handlePressWeb = () => {
    this.setState({ open: true });
  };

  handlePress = () => {
    let options = this.props.options;
    if (Platform.OS === "ios") {
      let destructiveIndex = -1;
      if (
        Number.isInteger(this.props.destructiveIndex) &&
        this.props.destructiveIndex >= 0
      ) {
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
    let options = this.state.open ? (
      <View
        style={{
          position: "absolute",
          bottom: "100%",
          right: "50%",
          flex: 1,
          elevation: 3,
          shadowColor: "black",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          borderRadius: 5,
          backgroundColor: "white"
        }}
      >
        {this.props.options.map((option, index) => {
          return (
            <View key={option}>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => this.handleClick(index)}
              >
                <Text style={{ textAlign: "center" }}>{option}</Text>
              </TouchableOpacity>

              {index < this.props.options.length - 1 && (
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: "lightgray"
                  }}
                />
              )}
            </View>
          );
        })}
      </View>
    ) : null;

    let component = this.props.button ? (
      <Image source={this.props.button} style={this.props.buttonStyle} />
    ) : (
      this.props.customButton
    );
    if (Platform.OS === "web") {
      return (
        <View>
          <View>
            <TouchableOpacity ref={"menu"} onPress={this.handlePressWeb}>
              {component}
            </TouchableOpacity>
          </View>
          {options}
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity ref={"menu"} onPress={this.handlePress}>
            {component}
          </TouchableOpacity>
        </View>
      );
    }
  }
}
