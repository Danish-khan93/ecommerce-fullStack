import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from ".";
type DATA = {
  titel: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

const BASEURL = "http://localhost:9000";
const ProductList = () => {
  const [product, setProduct] = useState<[] | DATA[]>([]);
  console.log(product);

  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    async function ProductData() {
      try {
        setIsLoading(true);
        await axios
          .get(`${BASEURL}/product`)
          .then((res) => setProduct(res.data));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    ProductData();
  }, []);

  const list = product.map((product) => {
    return <ProductCard product={product} />;
  });

  if (isLoading) return <p>loading.,,,</p>;

  if (!product.length) return <p>data is not </p>;

  return <Box className="my-3 flex justify-evenly">{list}</Box>;
};

export default ProductList;
