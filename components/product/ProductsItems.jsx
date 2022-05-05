import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Paper,
  Rating,
  Stack,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import CartButton from "../cart/CartButton";
export default function ProductsItems({ products }) {
  return (
    <Container sx={{ m: "2rem auto" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {products.map((product) => (
          <Grid sx={{ flex: "1 1 0" }} item lg={3} xl={2} key={product._id}>
            <Paper>
              <Box>
                <Link href={`/product/${product._id}`} passHref>
                  <a>
                    <Image
                      src={`${product.image}`}
                      alt="product image"
                      width={554}
                      height={540}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </Box>
              <Box sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Box>
                    <Box>
                      <Link href={`/product/${product._id}`} passHref>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          variant="subtitle1"
                          component="h3"
                          noWrap={true}
                        >
                          {product.title}
                        </Typography>
                      </Link>
                      <Rating
                        name="product rating"
                        precision={0.5}
                        value={product.rating}
                        readOnly
                      />
                    </Box>
                    <Box>
                      <Box>${product.price}</Box>
                    </Box>
                  </Box>
                  <CartButton
                    iconsize="outlineSquare"
                    item={product}
                    flow="column-reverse"
                  />
                </Stack>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
