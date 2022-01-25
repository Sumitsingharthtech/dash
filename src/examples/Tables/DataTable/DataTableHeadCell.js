import PropTypes from "prop-types";
import { useMaterialUIController } from "context";

function DataTableHeadCell({ width }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <div
      color={darkMode ? "white" : "secondary"}
      component="tr"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <h1> hello </h1>
    </div>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DataTableHeadCell;
