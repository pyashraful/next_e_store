import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";

const FlexBox = styled(Box)({
  display: "flex",
  flex: "1 1 0",
  flexDirection: "column",
  padding: 8,
});

const Small = styled(Box)({
  marginBottom: 4,
  fontSize: 12,
  color: "#7D879C",
  lineHeight: 1.5,
  textAlign: "left  ",
});
const Span = styled(Box)({
  color: "#2B3445",
  fontSize: 14,
});

export default function ProfileUserInfo() {
  return (
    <Paper
      sx={{
        py: "0.75rem",
        px: "1.5rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <FlexBox>
        <Small component={"small"}>First Name</Small>
        <Span component={"span"}>Md Ashraful</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Last Name</Small>
        <Span component={"span"}>Islam</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Email</Small>
        <Span component={"span"}>pyashraful@gmail.com</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Phone</Small>
        <Span component={"span"}>+8801856454154</Span>
      </FlexBox>
      <FlexBox>
        <Small component={"small"}>Birth date</Small>
        <Span component={"span"}>01 Jan, 1970</Span>
      </FlexBox>
    </Paper>
  );
}
