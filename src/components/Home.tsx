import { Box, Paper, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Container } from "@mui/system"
import React from "react"
import Layout from "./Shared/Layout"

const Home = () => {
  return (
    <Layout>
      <Container sx={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
        <Box display="flex" justifyContent="center" flex={1}>
          <Typography>
            Schedule
          </Typography>
        </Box>
        {/* <Box display="flex" justifyContent="center" flex={1}>
          2
        </Box> */}
      </Container>
    </Layout>
  )
}

export default Home