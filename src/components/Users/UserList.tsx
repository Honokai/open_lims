import { Container } from "@mui/system"
import React from "react"
import { useTable } from "../../contexts/useTable"
import { useTema } from "../../contexts/useTheme"
import { UserColumns } from "../../Helpers/UserColumns"
import Layout from "../Shared/Layout"
import Table from "../Shared/Table"

const UserList = () => {
  const {setLoading} = useTable()
  const [d, setD] = React.useState([])
  const {theme} = useTema()

  React.useEffect(() => {
    setLoading(true)
    fetch("http://api.teste.com/api/users",{
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN_API}`
      }
    }).then((r) => {
      return r.json()
    }).then((json) => {
      setD(json ?? [])

      setLoading(false)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <Layout>
      <Container sx={{height: "100%", padding: "3rem 0"}}>
        {/* <Table Entity={new UserColumns()} Sortable={true} RowData={d} Theme={theme}/> */}
      </Container>
    </Layout>
  )
}

export default UserList