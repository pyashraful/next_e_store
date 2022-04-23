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
        <Small component={"small"}>Last Name</Small>
        <Span>Islam</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Email</Small>
        <Span>pyashraful@gmail.com</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Phone</Small>
        <Span>+8801856454154</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Birth date</Small>
        <Span>01 Jan, 1970</Span>
      </FlexBox>
    </Paper>
  );
}
