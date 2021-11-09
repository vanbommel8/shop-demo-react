import React, { useContext } from "react";
import {
  Box,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  List,
  IconButton,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { AppContext } from "../App";

export default function Basket() {
  const [state, dispatch] = useContext(AppContext);
  const { opened } = state.basket;

  return (
    <Box
      sx={{
        width: "20%",
        height: "100%",
        bgcolor: "primary.dark",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "30px",
        color: "white",
        transform: opened ? "translateX(0)" : "translateX(-100%)",
        transition: "all 0.6s ease",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CloseIcon
          sx={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
          onClick={() => dispatch({ type: "TOGGLE_BASKET" })}
        />
        <Typography variant='button' component='div'>
          Your items
        </Typography>
        <List dense sx={{ mt: 5 }}>
          <ListItem
            sx={{ padding: 0 }}
            secondaryAction={
              <IconButton edge='end' aria-label='delete'>
                <DeleteTwoToneIcon sx={{ color: "white" }} />
              </IconButton>
            }
          >
            <ListItemText primary='Book title' />
          </ListItem>
          <Divider sx={{ borderColor: "white" }} />
        </List>
        <Chip sx={{ mt: 5 }} color='secondary' label='TOTAL PRICE: 150 milioni di dollari' />
      </Box>
    </Box>
  );
}