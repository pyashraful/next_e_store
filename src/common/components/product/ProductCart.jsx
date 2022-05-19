import React from "react";
import Image from "next/image";
import CartButton from "@components/cart/CartButton";
import { Box, Paper, Rating, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function ProductCart({ product }) {
  return (
    <Box sx={{ py: 0.5 }}>
      <Paper sx={{ overflow: "hidden" }}>
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
                <Box sx={{ fontWeight: 600, color: "primary.main" }}>
                  ${product.price}
                </Box>
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
    </Box>
  );
}
