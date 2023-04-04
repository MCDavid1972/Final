import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

const ItemP = ({ element }) => {
  return (
    <Card sx={{ 
        width: 300, 
        height: 350,
        background: "#fff",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)"
        }
    }}>
      <CardActionArea component={Link} to={`/detalle/${element.id}`}>
        <CardMedia sx={{ height: 140 }} image={element.img} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {element.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.descripcion}
          </Typography>
          <Typography variant="h6" color="text.primary">
            $ {element.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="outlined" component={Link} to={`/detalle/${element.id}`}>
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemP;