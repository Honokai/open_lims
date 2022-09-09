import React from "react"
import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import users from "./users.json"
import schedule from "./schedules.json"
import mySchedule from "./mySchedules.json"
import Layout from "./Shared/Layout"
import Table from "./Shared/Table";
import { useTema } from "../contexts/useTheme"
import { useTable } from "../contexts/useTable"

const Home = () => {
  const { theme } = useTema()
  const { statusFilter } = useTable()
  let teste = true

  return (
    <Layout>
      <Container sx={{height: "100%", padding: "3rem 0"}}>
        <Typography variant="h4" paragraph>
            Welcome, {statusFilter.search['client']}
        </Typography>
        {teste ? (
          <Table Sortable={true} ColumnHeaders={Object.keys(schedule[0])} showCheckbox={true} RowData={schedule} Theme={theme}/>
        ) : (
          <Table Sortable={true} ColumnHeaders={Object.keys(mySchedule[0])} RowData={mySchedule} showCheckbox={true}/>
        )}
        
      </Container>
    </Layout>
  )
}

export default Home