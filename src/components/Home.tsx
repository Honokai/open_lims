import { Box, Paper, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Container } from "@mui/system"
import React from "react"
import Layout from "./Shared/Layout"
import Table from "./Shared/Table";

const users = [
  {
    id: 1,
    nome: "Emerson Ferreira Fernandes",
    cpf: "item 1111",
    valor: "item 1111",
    papel: "Recepção"
  },
  {
    id: 2,
    nome: "Lucas Herreira",
    cpf: "Meu cpf",
    valor: "item 222",
    papel: "Teste"
  },
  {
    id: 3,
    nome: "Porta dos testes",
    cpf: "item 123",
    valor: "item 4322",
    papel: "Corma"
  },
  {
    id: 4,
    nome: "Tormar",
    cpf: "item 5431234",
    valor: "item 213213",
    papel: "Recepção"
  },
  {
    id: 5,
    nome: "Emerson Ferreira Fernandes",
    cpf: "item 1232555",
    valor: "item 555333",
    papel: "Nutri"
  },
]

const Home = () => {
  return (
    <Layout>
      <Container sx={{ height: "100%"}}>
        <Typography variant="h4" paragraph>
            Schedule
        </Typography>
        <Table Sortable={true} ColumnHeaders={["ID", "Nome", "CPF", "Valor", "Papel",]} RowData={users}/>
        {/* <Box display="flex" justifyContent="center" flex={1}>
          2
        </Box> */}
      </Container>
    </Layout>
  )
}

export default Home