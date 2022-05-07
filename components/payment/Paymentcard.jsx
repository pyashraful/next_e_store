import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

export default function Paymentcard() {
  return (
    <Accordion>
      <AccordionSummary>
        <FormControlLabel control={<Radio />} label="Pay with credit card" />
        <Divider />
      </AccordionSummary>
      <AccordionDetails>handleClickActive</AccordionDetails>
    </Accordion>
  );
}
