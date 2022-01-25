// Material Dashboard 2 React components
import MDBox from "components/MDBox";

function Footer() {
  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    />
  );
}
export default Footer;
