import { Box, Paper, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Container } from "@mui/system"
import React from "react"
import Layout from "./Shared/Layout"
import teste from "../db.json"
import { UserProps } from "../Helpers/EntitiesData";

const Home = () => {
  // let rows: GridRowsProp = []
  const [ rows, setRows ] = React.useState<GridRowsProp>([])

  // React.useEffect(() => {
  //   let t: UserProps[] = []
  //   teste.users.forEach(user => {
  //     return t.push(user)
  //   })
  //   setRows(t)
  // }, [])

  // const columns: GridColDef[] = [
  //   { field: 'id', headerName: 'ID'},
  //   { field: 'name', headerName: 'Nome'},
  //   { field: 'email', headerName: 'E-mail'},
  // ];

  return (
    <Layout>
      <Container sx={{ height: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4" paragraph>
            Schedule
        </Typography>
        <Box display="flex" justifyContent={"center"} flex={1} width={"80%"}>
          {/* <DataGrid rows={rows} columns={columns} /> */}
        </Box>
        {/* <Box display="flex" justifyContent="center" flex={1}>
          2
        </Box> */}
      </Container>
    </Layout>
  )
}

export default Home