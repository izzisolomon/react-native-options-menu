# react-native-options-menu
A native looking options dialog for IOS, and Android (Web coming soon)

To Download: run yarn add react-native-options-menu.

Usage example: 

                    import OptionsMenu from "react-native-options-menu";
                    const MoreIcon = require("../../assets/more/more.png");

                     <OptionsMenu
                        button={MoreIcon}
                        buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
                        destructiveIndex={1}
                        options={["Edit", "Delete", "Cancel"]}
                        actions={
                        [this.sharePost, this.deletePost, null]
                        }
                       />
                           
                           
Note that button is a required prop (pass in a png of the desired button).

Destructive index in an IOS only prop. It will appear as a red index. 

Options: an array of strings that will be displayed in the menu.

Actions: an array of functions to be executed for every menu item. Note that the orders of options an actions have to match.

![Screenshot](ios_screenshot.png)

![Screenshot](android_screenshot.png)

