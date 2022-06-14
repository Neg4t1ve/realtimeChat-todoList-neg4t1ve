import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../app/slice/todoSlice";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { pink } from "@mui/material/colors";

function TodoItem({ id, completed, text }) {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          aria-label="delete"
          onClick={() => dispatch(removeTodo({ id }))}
          sx={{ color: pink[600] }}
          fontSize="small"
          edge="end"
        >
          <CloseSharpIcon />
        </IconButton>
      }
    >
      <ListItemButton
        role={undefined}
        onClick={() => dispatch(toggleTodoComplete({ id }))}
        divider
      >
        <ListItemIcon>
          <Checkbox
            type="checkbox"
            checked={completed}
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          variant="h1"
          component="p"
          sx={
            completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          primary={
            <Typography component="span" variant="h4" color="text.primary">
              {text}
            </Typography>
          }
        ></ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;
