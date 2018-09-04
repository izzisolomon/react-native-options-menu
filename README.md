# react-native-options-menu
A native looking options dialog for IOS, and Android and Web.

To Download, run: yarn add react-native-options-menu, or npm install -s react-native-options-menu.

Usage example: 

    import OptionsMenu from "react-native-options-menu";
    const MoreIcon = require("../../assets/more/more.png");

    <OptionsMenu
      button={MoreIcon}
      buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
      destructiveIndex={1}
      options={["Edit", "Delete", "Cancel"]}
      actions={[this.editPost, this.deletePost]}/>
                           
                           
Note that button is a required prop (pass in a png of the desired button).

As an alternative to the button and style props, you can just pass in a full custom component: 


    const myIcon = (<Icon name="rocket" size={30} color="#900" />)
    <OptionsMenu
      customButton={myIcon}
      destructiveIndex={1}
      options={["Edit", "Delete", "Cancel"]}
      actions={[this.editPost, this.deletePost]}/>


Destructive index in an iOS only prop. It will appear as a red index. 

Options: an array of strings that will be displayed in the menu.

Actions: an array of functions to be executed for every menu item. Note that the orders of options an actions have to match.


iOS Screenshot: 

![Screenshot](ios_screenshot.png)

Android Screenshot:

![Screenshot](android_screenshot.png)

