import styled from "styled-components";
import { flexbox, layout, space, variant } from "styled-system";

export const Card = styled("div")(
  variant({
    prop: "mode",
    variants: {
      primary: {
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 1,
        borderColor: "borders",
      },
    },
  }),
  flexbox,
  space,
  layout
);

Card.defaultProps = {
  mode: "primary",
};
