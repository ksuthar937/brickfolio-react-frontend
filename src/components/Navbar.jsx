import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { fetchIdProducts, setProductId } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const { searchInput } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleProductId = (e) => {
    dispatch(setProductId(e.target.value));
    dispatch(fetchIdProducts(e.target.value));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LocalGroceryStoreIcon sx={{ margin: 2, color: "#F8D706" }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Brickfolio Store
          </Typography>

          {/* Search view for desktop */}
          <TextField
            className="search-desktop"
            size="small"
            color="primary"
            value={searchInput}
            onChange={(e) => handleProductId(e)}
            InputProps={{
              sx: { width: 280, color: "white" },
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="info" />
                </InputAdornment>
              ),
            }}
            placeholder="Enter product id"
            name="search"
          />

          {/* Search view for mobiles */}
          <TextField
            className="search-mobile"
            size="small"
            fullWidth
            value={searchInput}
            onChange={(e) => handleProductId(e)}
            InputProps={{
              sx: { color: "white" },
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="info" />
                </InputAdornment>
              ),
            }}
            placeholder="Enter product id"
            name="search"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
