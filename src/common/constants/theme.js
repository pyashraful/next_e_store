import { createTheme, experimental_sx as sx } from "@mui/material/styles";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#D23F57",
    },
    background: {
      default: "#F6F9FC",
    },

    text: {
      main: "#2B3445",
      light: "#4B566B",
      disabled: "#7D879C",
    },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& label": { fontSize: "14px" },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: sx({
          borderRadius: 2,
        }),
      },
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});

export default theme;
