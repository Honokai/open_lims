import { Container } from "@mui/system"
import React from "react"
import { useTable } from "../../contexts/useTable"
import { useTema } from "../../contexts/useTheme"
import { SetorColumn } from "../../Helpers/SetorColumn"
import Layout from "../Shared/Layout"
import Table from "../Shared/Table"

const UserList = () => {
  const {statusFilter, loadStatusFilter, loadData, setLoading, data} = useTable()
  const {theme} = useTema()
  const objRef = React.useRef<SetorColumn>()
  React.useEffect(() => {
    fetch("http://api.teste.com/api/users",{
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
      }
    }).then((r) => {
      return r.json()
    }).then((json) => {
      let ColumnHeaders = Object.keys(json[0])
      objRef.current = new SetorColumn(ColumnHeaders, [''])
      
      loadStatusFilter({...statusFilter, ColumnHeaders})
      loadData(json ?? [])

      setLoading(false)
    }).catch(e => {
      console.log(e)
    })
  }, [])
  return (
    <Layout>
      <Container sx={{height: "100%", padding: "3rem 0"}}>
        <Table Sortable={true} ColumnHeaders={objRef.current?.getColumnNames() ?? []} RowData={data.filteredList} Theme={theme}/>
      </Container>
    </Layout>
  )
}

export default UserList