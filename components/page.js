import { Box } from "./box";

export const Page = ({ ...props }) => {
  return (
    <Box
      maxWidth={["100%", "900px"]}
      mx={"auto"}
      p={2}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      my={2}
      {...props}
    />
  );
};
