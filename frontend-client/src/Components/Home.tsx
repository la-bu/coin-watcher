import {Box, Typography} from "@mui/material";

import LineChart from "./LineChart";

const Home = () => {
   return (
      <Box sx={{p: 3, ml: 10, mr: 10}}>
         <Typography variant="h3">Introducing CoinCheck</Typography>
         <Typography variant="h4">The ultimate platform for tracking the world of cryptocurrency</Typography>
         <Typography variant="body1" align="justify">
            <br />
            Our cutting-edge platform is built on React and TypeScript, two of the most popular and powerful technologies for web development. We've
            harnessed the power of these technologies to create a seamless and user-friendly experience that makes it easy to track the latest prices
            of popular cryptocurrencies.
            <br />
            <br />
            CoinCheck leverages gRPC to retrieve data from various sources, ensuring fast and reliable access to real-time cryptocurrency prices. gRPC
            is a high-performance remote procedure call (RPC) framework that enables our platform to communicate with various APIs and data sources
            with lightning-fast speed
            <br />
            <br />
            And the best part? You can check out our source code on GitHub to see how we've built our platform and learn more about gRPC in web
            development
            <br />
            <br />
            So why wait? Join the millions of users who trust CoinCheck for accurate and up-to-date information on the world of cryptocurrency. Start
            tracking your favorite cryptocurrencies today and experience the power of React, TypeScript, and gRPC in action!
         </Typography>
      </Box>
   );
};

export default Home;
