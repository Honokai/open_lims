import React from "react"
import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import mySchedule from "./mySchedules.json"
import Layout from "./Shared/Layout"
import Table from "./Shared/Table";
import { useTema } from "../contexts/useTheme"
import { useTable } from "../contexts/useTable"
import { SetorColumn } from "../Helpers/SetorColumn"

const Home = () => {
  const { theme } = useTema()
  const { statusFilter, setLoading, loadStatusFilter, loadData, data } = useTable()
  const objRef = React.useRef<SetorColumn>()
  let teste = true

  React.useEffect(() => {
    setLoading(true)

    fetch("http://api.teste.com/api/setores",{
      headers: {
        Authorization: `Bearer DKlr6lSYNocng5LBRyEK9pTS6SgK9rRDHqJZvDsO`
      }
    }).then((r) => {
      return r.json()
    }).then((json) => {
      let ColumnHeaders = Object.keys(json[0])
      objRef.current = new SetorColumn(ColumnHeaders, [''])
      
      loadStatusFilter({...statusFilter, ColumnHeaders})
      loadData(json ?? [])

      setLoading(false)
    })
  }, [])
  
  return (
    <Layout>
      <Container sx={{height: "100%", padding: "3rem 0"}}>
        <Typography variant="h4" paragraph>
            Welcome, {statusFilter.search['client']}
        </Typography>

        {teste ? (
          <Table Sortable={true} ColumnHeaders={objRef.current?.getColumnNames() ?? []} showCheckbox={true} RowData={data.filteredList} Theme={theme}/>
        ) : (
          <Table Sortable={true} ColumnHeaders={Object.keys(mySchedule[0])} RowData={mySchedule} showCheckbox={true}/>
        )}
        
      </Container>
    </Layout>
  )
}

export default Home