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
  const {setLoading} = useTable()
  const [d, setD] = React.useState([])
  const {theme} = useTema()
  const objRef = React.useRef<SetorColumn>()
  let teste = false

  React.useEffect(() => {
    setLoading(true)

    fetch("http://api.teste.com/api/setores",{
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
      }
    }).then((r) => {
      return r.json()
    }).then((json) => {
      let ColumnHeaders = Object.keys(json[0])
      objRef.current = new SetorColumn(ColumnHeaders, [''])

      setD(json ?? [])

      setLoading(false)
    })
  }, [])
  
  return (
    <Layout>
      <Container sx={{height: "100%", padding: "3rem 0"}}>
        <Typography variant="h4" paragraph>
            Welcome, 
        </Typography>
      {teste ? (
        <Table Sortable={true} ColumnHeaders={objRef.current?.getColumnNames() ?? []} showCheckbox={true} RowData={d} Theme={theme}/>
      ) : (
        <Table Sortable={true} ColumnHeaders={Object.keys(mySchedule[0])} RowData={mySchedule} showCheckbox={true}/>
      )}
      </Container>
    </Layout>
  )
}

export default Home