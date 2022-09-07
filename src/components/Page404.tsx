import { Typography } from "@mui/material"

const Page404 = () => {
  return (
    <div style={{height: "100vh", display: "flex"}}>
      <div style={{flex: "1", backgroundColor: "black"}}></div>
      <div style={{flex: "2", backgroundColor: "white"}}>
        <Typography variant="h5">
          Ilha perdida, número de habitantes: 1.
        </Typography>
      </div>
    </div>
  )
}

export default Page404