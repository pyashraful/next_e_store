import { Box, Paper, Rating, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function ProductsItems({ products }) {
  return (
    <Box>
      {products.map((product) => (
        <Box key={product._id}>
          <Paper>
            <Box>
              <Link href={`/product/${product._id}`} passHref>
                <Image
                  className="p-8 rounded-t-lg"
                  src={`${product.image}`}
                  alt="product image"
                  width={554}
                  height={540}
                  layout="responsive"
                />
              </Link>
            </Box>
            <Box>
              <Box>
                <Box>
                  <Box>
                    <Link href={`/product/${product._id}`} passHref>
                      <Typography variant="h3">{product.title}</Typography>
                    </Link>
                    <Rating name="read-only" value={product.rating} readOnly />
                  </Box>
                  <Box>
                    <Box>${product.price}</Box>
                  </Box>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
}
