import { Paper, Typography, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type DATA = {
  titel: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

const ProductCard = ({ product }: { product: DATA }) => {
  return (
    <Paper className="w-[300px] h-[300px] flex flex-col items-center gap-8">
      <Box className="w-[280px] h-[200px] text-center shadow-md rounded mt-4">
        <Typography component={"img"} src={product.image}></Typography>
      </Box>
      <Box className="flex justify-between items-center w-[280px]">
        <Typography>${product.price}</Typography>
        <Button
          className="bg-[#344e41] text-white font-bold  hover:bg-[#344e41] shadow-md"
          endIcon={<ShoppingCartIcon />}
        >
          Buy Now
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductCard;
