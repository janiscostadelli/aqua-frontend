import { createMuiTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: neutralColor,
    },
  },
});

export default theme;