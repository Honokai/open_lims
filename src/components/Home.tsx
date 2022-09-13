import React from "react"
import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import mySchedule from "./mySchedules.json"
import Layout from "./Shared/Layout"
import Table from "./Shared/Table";
import { useTema } from "../contexts/useTheme"
import { useTable } from "../contexts/useTable"
import { UserColumns } from "../Helpers/UserColumns"
import { SetorColumn } from "../Helpers/SetorColumn"

const Home = () => {
  const {setLoading} = useTable()
  const [d, setD] = React.useState([])
  const {theme} = useTema()

  React.useEffect(() => {
    setLoading(true)

    fetch("http://api.teste.com/api/setores",{
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
      }
    }).then((r) => {
      return r.json()
    }).then((json) => {
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
        <Table Entity={new SetorColumn()}Sortable={true} showCheckbox={true} RowData={d} Theme={theme}/>
      </Container>
    </Layout>
  )
}

export default Home