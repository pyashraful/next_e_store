import Link from "next/link";
import Image from "next/image";
import {
  Box,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function ProductsItems({ products }) {
  return (
    <Grid container>
      {products.map((product) => (
        <Grid item xs={4} xl={3} key={product._id}>
          <Paper>
            <Box>
              <Link href={`/product/${product._id}`} passHref>
                <Image
                  className="p-8 rounded-t-lg"
                  src={`${product.image}`}
                  alt="product image"
                  width={554}
                  height={540}
                />
              </Link>
            </Box>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Box>
                    <Link href={`/product/${product._id}`} passHref>
                      <Typography
                        sx={{ fontWeight: 600 }}
                        variant="subtitle1"
                        variantMapping="h3"
                      >
                        {product.title}
                      </Typography>
                    </Link>
                    <Rating name="read-only" value={product.rating} readOnly />
                  </Box>
                  <Box>
                    <Box>${product.price}</Box>
                  </Box>
                </Box>
                <Stack direction="column" alignItems="center">
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Box>1</Box>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
