import { Container } from "@mui/system"
import React from "react"
import { useLocation } from "react-router-dom"
import { SampleColumns } from "../../Helpers/SampleColumns"
import { SetorColumn } from "../../Helpers/SetorColumn"
import { GenericObjectKeyType } from "../../Helpers/TypeHelpers"
import Layout from "../Shared/Layout"
import Table from "../Shared/Table"

export const CreateV2 = () => {
  const [data, setData] = React.useState<GenericObjectKeyType[]>()
  const { state }: GenericObjectKeyType = useLocation()

  React.useEffect(() => {
    setData(state.schedules)
  }, [])

  return (
    <Layout>
      <Container /*maxWidth="xl"*/ sx={{height: "100%", padding: "3rem 0"}}>
        <Table entity={new SetorColumn()} rowData={data} sortable={true} editable/>
      </Container>
    </Layout>
  )
}