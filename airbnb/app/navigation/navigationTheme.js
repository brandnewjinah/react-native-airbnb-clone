import { DefaultTheme } from "@react-navigation/native";

//import styles and assets
import Colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.red,
  },
};
