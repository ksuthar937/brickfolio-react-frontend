import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

export default function ProductCard({
  imgage,
  title,
  description,
  price,
  discountPercentage,
  rating,
}) {
  const discountedAmount = (price / 100) * discountPercentage;
  const priceAfterDiscount = (price - discountedAmount).toFixed(0);

  return (
    <Card sx={{ width: 345, margin: 3 }}>
      <CardMedia sx={{ height: 140 }} image={imgage} title="green iguana" />
      <CardContent>
        <Typography noWrap gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography noWrap gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Typography variant="h6" color="div">
          ${priceAfterDiscount}{" "}
          <span style={{ textDecoration: "line-through" }}>${price}</span> (
          {discountPercentage}% off)
        </Typography>

        <Typography variant="body1" color="text.primary">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>{rating}</span>
            <StarIcon fontSize="small" />
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" size="small">
          Add to Cart
        </Button>
        <Button
          fullWidth
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#F8D706",
            color: "black",
            "&:hover": {
              color: "white",
              backgroundColor: "#B7B7B7",
            },
          }}
        >
          <FavoriteBorderIcon fontSize="medium" color="inherit" />
          <span> Wishlist</span>
        </Button>
      </CardActions>
    </Card>
  );
}
