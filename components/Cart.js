import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CricleButton from "./CricleButton";
import CloseIcon from "@mui/icons-material/Close";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import data from "../utils/data";

export default function Cart() {
  return (
    <Drawer anchor="right" open={true}>
      <Box sx={{ width: 350 }}>
        <List>
          <ListItem>
            <Stack direction="column" alignItems="center">
              <CricleButton>
                <AddIcon />
              </CricleButton>
              <Box>1</Box>
              <CricleButton>
                <RemoveIcon />
              </CricleButton>
            </Stack>
            <ListItemAvatar>
              <Image
                src={`${data.products[0].image}`}
                alt="Picture of the author"
                width={76}
                height={76}
              />
            </ListItemAvatar>
            <ListItemText>{data.products[0].title}</ListItemText>
            <CricleButton>
              <CloseIcon />
            </CricleButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
