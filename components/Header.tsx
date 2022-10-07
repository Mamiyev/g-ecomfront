import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

type IHeaderProps = {};

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(TextField)({
  width: "600px",
  borderRadius: "30px",
});

export const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <StyledToolbar>
            <Typography variant="h6" component="span">
              G-shop
            </Typography>
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Search label="search field" type="search" variant="filled" />
            </Box>
            <Box>
              <IconButton>
                <Badge>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
