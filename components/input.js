import styled from "styled-components";
import { space, layout, color, flexbox, variant } from "styled-system";

export const Input = styled("input")(
  variant({
    prop: "mode",
    variants: {
      primary: {
        color: "white",
        height: "52px",
        px: 2,
        fontSize: 18,
        lineHeight: 32,
        borderRadius: 1,
        borderWidth: "1px",
        borderColor: "borders",
        color: "foreground",
        bg: "surface",
      },
    },
  }),
  space,
  layout,
  color,
  flexbox
);

Input.defaultProps = { mode: "primary" };
