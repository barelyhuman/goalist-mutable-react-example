import styled from "styled-components";
import { color, flexbox, layout, space, variant } from "styled-system";

export const Button = styled("button")(
  {
    appearance: "none",
    fontFamily: "sans-serif",
    borderWidth: "1px",
    height: "38px",
    minWidth: "150px",
    borderRadius: "4px",
    padding: "4px 8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  variant({
    prop: "mode",
    variants: {
      primary: {
        borderColor: "success",
        color: "foreground",
        bg: "success",
        "&:hover": {
          opacity: "90%",
        },
      },
      secondary: {
        borderColor: "borders",
        color: "white",
        bg: "background",
      },
      danger: {
        borderColor: "error",
        color: "white",
        bg: "error",
      },
    },
  }),
  color,
  space,
  layout,
  flexbox
);

Button.defaultProps = {
  mode: "primary",
};
