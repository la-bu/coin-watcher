import {Box, Button, Card, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {Coin, CoinSymbol} from "../Util/util";

import CryptoService from "../Services/CryptoService";
import {useState} from "react";

const CurrentPrice = () => {
   const [selectedCoin, setSelectedCoin] = useState<string>(Coin.BTC);
   const [currentPrice, setCurrentPrice] = useState<string>("");
   const coins: CoinSymbol[] = [Coin.BTC, Coin.ETH, Coin.DOGE];

   const handleSelectCoin = (e: SelectChangeEvent<any>) => {
      setCurrentPrice("");
      setSelectedCoin(e.target.value);
   };

   const handlePriceCheck = async () => {
      CryptoService.getCurrentPrice(selectedCoin)
         .then((response) => {
            if (response) {
               setCurrentPrice(response);
            }
         })
         .catch((e) => {
            console.log(e);
         });
   };

   return (
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", p: 3}}>
         <Typography variant="h4" component="h1" align="center" gutterBottom>
            Check the current price
         </Typography>
         <Box width={"50%"}>
            <Select sx={{width: "100%", height: "50px", mb: 1}} labelId="coin-symbol" value={selectedCoin} onChange={(e) => handleSelectCoin(e)}>
               {coins.map((coin) => (
                  <MenuItem key={coin} value={coin}>
                     {coin.toUpperCase()}
                  </MenuItem>
               ))}
            </Select>
            <Button onClick={handlePriceCheck} variant="contained" sx={{width: "100%", height: "50px"}}>
               Check Price
            </Button>
         </Box>
         {currentPrice && (
            <Card sx={{width: "300px", height: "100px", m: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 50}}>
               {currentPrice} €
            </Card>
         )}
      </Box>
   );
};

export default CurrentPrice;
