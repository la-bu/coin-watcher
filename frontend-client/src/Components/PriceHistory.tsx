import {Box, Button, Card, MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {useEffect, useState} from "react";

import {Coin} from "../Util/util";
import CryptoService from "../Services/CryptoService";
import LineChart from "./LineChart";
import {convertDate} from "../Util/util";

const PriceHistory = () => {
   const [cryptoData, setCryptoData] = useState<number[]>([]);
   const [cryptoTimestamps, setCryptoTimestamps] = useState<string[]>([]);
   const [symbol, setSymbol] = useState<string>("");
   const [selectedCoin, setSelectedCoin] = useState<string>(Coin.BTC);

   useEffect(() => {
      CryptoService.cancelStream();
   }, []);

   const handleHistoryCheck = async () => {
      CryptoService.cancelStream();
      CryptoService.getPriceHistory(selectedCoin, (response) => {
         setSymbol(response.getSymbol());
         setCryptoTimestamps((prevState) => [...prevState, convertDate(response.getTimestamp())]);
         setCryptoData((prevState) => [...prevState, response.getPrice()]);
      });
   };

   const handleSelectCoin = (e: SelectChangeEvent<any>) => {
      setSelectedCoin(e.target.value);
   };

   return (
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", p: 3}}>
         <Typography variant="h4" component="h1" align="center" gutterBottom>
            Request the history
         </Typography>
         <Box width={"50%"}>
            <Select sx={{width: "100%", height: "50px", mb: 1}} labelId="coin-symbol" value={selectedCoin} onChange={(e) => handleSelectCoin(e)}>
               <MenuItem value={"btc"}>BTC</MenuItem>
               <MenuItem value={"eth"}>ETH</MenuItem>
               <MenuItem value={"doge"}>DOGE</MenuItem>
            </Select>
            <Button onClick={handleHistoryCheck} variant="contained" sx={{width: "100%", height: "50px"}}>
               Check Price
            </Button>
         </Box>
         <Card sx={{m: 10, display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
            <Box width={"100%"} height={"35vh"}>
               <LineChart ChartData={cryptoData.slice(-20)} XAxis={cryptoTimestamps.slice(-20)} Symbol={symbol} />
            </Box>
         </Card>
      </Box>
   );
};

export default PriceHistory;
