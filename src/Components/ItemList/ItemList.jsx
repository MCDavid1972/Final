import ItemP from "../ItemP/ItemP";
import { Box } from "@mui/material";

const ItemList = ({ items }) => {
  return (
    <Box sx={{
        backgroundColor: "white",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        py: "40px",
        px: "20px",
        gap: "30px",
      }}>
      {items.map((element) => {
        return <ItemP key={element.id} element={element} />;
      })}
    </Box>
  );
};

export default ItemList;



