import "./App.css";

import {Box, Button, ButtonGroup, Paper, ThemeProvider, Typography, createMuiTheme} from "@mui/material";

import CurrentPrice from "./Components/CurrentPrice";
import Home from "./Components/Home";
import PriceHistory from "./Components/PriceHistory";
import {useState} from "react";

function App() {
   const [selected, setSelected] = useState<1 | 2 | 3>(1);

   const theme = createMuiTheme({
      palette: {
         primary: {
            main: "#4FC289",
         },
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", pt: 5}}>
            <Box sx={{width: "60%"}}>
               <Typography variant="h1" fontFamily={"monospace"} align={"center"}>
                  Coincheck
               </Typography>
               <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{width: "100%", mt: 3, mb: 5}}>
                  <Button sx={{width: "100%"}} onClick={() => setSelected(1)}>
                     Home
                  </Button>
                  <Button sx={{width: "100%"}} onClick={() => setSelected(2)}>
                     Current Price
                  </Button>
                  <Button sx={{width: "100%"}} onClick={() => setSelected(3)}>
                     Price History
                  </Button>
               </ButtonGroup>
               <Paper elevation={2} sx={{width: "100%", height: "65vh"}}>
                  {selected === 1 ? <Home /> : selected === 2 ? <CurrentPrice /> : <PriceHistory />}
               </Paper>
            </Box>
         </Box>
      </ThemeProvider>
   );
}

export default App;
