import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";

const FlexBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 0",
  padding: 8,
});

const Small = styled(Box)({
  marginBottom: 4,
  fontSize: 12,
  color: "#7D879C",
  lineHeight: 1.5,
  textAlign: "let",
});
const Span = styled(Box)({
  color: "#2B3445",
});

export default function ProfileUserInfo() {
  return (
    <Paper sx={{ py: 1.5, px: 3, display: "flex" }}>
      <FlexBox>
        <Small component={"small"}>First Name</Small>
        <Span>Md Ashraful</Span>
      </FlexBox>
    </Paper>
  );
}
