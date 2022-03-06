import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
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
            <Button
              variant="outlined"
              sx={{ width: 20, height: 20, borderRadius: "50%" }}
            >
              <AddIcon />
            </Button>
            <div>1</div>
            <Button variant="outline">
              <RemoveIcon />
            </Button>
            <ListItemAvatar>
              <Image
                src={`${data.products[0].image}`}
                alt="Picture of the author"
                width={76}
                height={76}
              />
            </ListItemAvatar>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
