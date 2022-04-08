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
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
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
          <Grid item lg={3} xl={2} key={product._id}>
            <Paper>
              <Box>
                <Link href={`/product/${product._id}`} passHref>
                  <a>
                    <Image
                      className="p-8 rounded-t-lg"
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
                        name="read-only"
                        value={product.rating}
                        readOnly
                      />
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
    </Container>
  );
}
