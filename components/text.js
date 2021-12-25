import styled from "styled-components";
import {
  color,
  fontFamily,
  fontSize,
  fontStyle,
  layout,
  space,
  textAlign,
  variant,
} from "styled-system";

export const Text = styled("p")(
  {
    color: "white",
    fontFamily: "sans-serif",
  },
  variant({
    prop: "mode",
    variants: {
      danger: {
        color: "error",
      },
    },
  }),
  textAlign,
  fontFamily,
  fontSize,
  fontStyle,
  space,
  layout,
  color
);
