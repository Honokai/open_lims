import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import users from "./users.json"
import Layout from "./Shared/Layout"
import Table from "./Shared/Table";
import { useTema } from "../contexts/useTheme"

const Home = () => {
  const { theme } = useTema()

  return (
    <Layout>
      <Container sx={{ height: "100%"}}>
        <Typography variant="h4" paragraph>
            Schedule
        </Typography>
        <Table Sortable={true} ColumnHeaders={["ID", "Nome", "CPF", "Valor", "Papel",]} RowData={users} Theme={theme}/>
      </Container>
    </Layout>
  )
}

export default Home