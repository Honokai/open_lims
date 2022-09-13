import { Container } from "@mui/system"
import { SampleColumns } from "../../Helpers/SampleColumns"
import Layout from "../Shared/Layout"
import Table from "../Shared/Table"

export const CreateV2 = () => {
  return (
    <Layout>
      <Container maxWidth="xl" sx={{height: "100%", padding: "3rem 0"}}>
        <Table Entity={new SampleColumns()} Sortable={true}/>
      </Container>
    </Layout>
  )
}