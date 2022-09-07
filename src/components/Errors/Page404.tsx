import { Button, Icon, Typography } from "@mui/material"
import {HomeSharp as HomeIcon} from '@mui/icons-material';
import { Link } from "react-router-dom"
import { FlexCenteredDiv } from "../Shared/StyledTags"

const Page404 = () => {
  return (
    <div style={{height: "100vh", display: "flex"}}>
      <div style={{flex: "1", display: "flex"}}>
        <svg style={{height: "100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><linearGradient id="a" x1="50.31%" x2="50%" y1="74.74%" y2="0%"><stop offset="0%" stop-color="#FFE98A"/><stop offset="67.7%" stop-color="#B63E59"/><stop offset="100%" stop-color="#68126F"/></linearGradient><circle id="c" cx="603" cy="682" r="93"/><filter id="b" width="203.2%" height="203.2%" x="-51.6%" y="-51.6%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="32"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/></filter><linearGradient id="d" x1="49.48%" x2="49.87%" y1="11.66%" y2="77.75%"><stop offset="0%" stop-color="#F7EAB9"/><stop offset="100%" stop-color="#E5765E"/></linearGradient><linearGradient id="e" x1="91.59%" x2="66.97%" y1="5.89%" y2="100%"><stop offset="0%" stop-color="#A22A50"/><stop offset="100%" stop-color="#EE7566"/></linearGradient><linearGradient id="f" x1="49.48%" x2="49.61%" y1="11.66%" y2="98.34%"><stop offset="0%" stop-color="#F7EAB9"/><stop offset="100%" stop-color="#E5765E"/></linearGradient><linearGradient id="g" x1="78.5%" x2="36.4%" y1="106.76%" y2="26.41%"><stop offset="0%" stop-color="#A22A50"/><stop offset="100%" stop-color="#EE7566"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect width="1024" height="1024" fill="url(#a)"/><use fill="black" filter="url(#b)"/><use fill="#FFF6CB" /><g fill="#FFFFFF" opacity=".3" transform="translate(14 23)"><circle cx="203" cy="255" r="3" fill-opacity=".4"/><circle cx="82" cy="234" r="2"/><circle cx="22" cy="264" r="2" opacity=".4"/><circle cx="113" cy="65" r="3"/><circle cx="202" cy="2" r="2"/><circle cx="2" cy="114" r="2"/><circle cx="152" cy="144" r="2"/><circle cx="362" cy="224" r="2"/><circle cx="453" cy="65" r="3" opacity=".4"/><circle cx="513" cy="255" r="3"/><circle cx="593" cy="115" r="3"/><circle cx="803" cy="5" r="3" opacity=".4"/><circle cx="502" cy="134" r="2"/><circle cx="832" cy="204" r="2"/><circle cx="752" cy="114" r="2"/><circle cx="933" cy="255" r="3" opacity=".4"/><circle cx="703" cy="225" r="3"/><circle cx="903" cy="55" r="3"/><circle cx="982" cy="144" r="2"/><circle cx="632" cy="14" r="2"/></g><g transform="translate(0 550)"><path fill="#8E2C15" d="M259 5.47c0 5.33 3.33 9.5 10 12.5s9.67 9.16 9 18.5h1c.67-6.31 1-11.8 1-16.47 8.67 0 13.33-1.33 14-4 .67 4.98 1.67 8.3 3 9.97 1.33 1.66 2 5.16 2 10.5h1c0-5.65.33-9.64 1-11.97 1-3.5 4-10.03-1-14.53S295 7 290 3c-5-4-10-3-13 2s-5 7-9 7-5-3.53-5-5.53c0-2 2-5-1.5-5s-7.5 0-7.5 2c0 1.33 1.67 2 5 2z"/><path fill="url(#d)" d="M1024 390H0V105.08C77.3 71.4 155.26 35 297.4 35c250 0 250.76 125.25 500 125 84.03-.08 160.02-18.2 226.6-40.93V390z"/><path fill="url(#d)" d="M1024 442H0V271.82c137.51-15.4 203.1-50.49 356.67-60.1C555.24 199.3 606.71 86.59 856.74 86.59c72.78 0 124.44 10.62 167.26 25.68V442z"/><path fill="url(#e)" d="M1024 112.21V412H856.91c99.31-86.5 112.63-140.75 39.97-162.78C710.24 192.64 795.12 86.58 856.9 86.58c72.7 0 124.3 10.6 167.09 25.63z"/><path fill="url(#e)" d="M1024 285.32V412H857c99.31-86.6 112.63-140.94 39.97-163L1024 285.32z"/><path fill="url(#f)" d="M0 474V223.93C67.12 190.69 129.55 155 263 155c250 0 331.46 162.6 530 175 107.42 6.71 163-26.77 231-58.92V474H0z"/><path fill="url(#e)" d="M353.02 474H0V223.93C67.12 190.69 129.55 155 263 155c71.14 0 151.5 12.76 151.5 70.5 0 54.5-45.5 79.72-112.5 109-82.26 35.95-54.57 111.68 51.02 139.5z"/><path fill="url(#g)" d="M353.02 474H0v-14.8l302-124.7c-82.26 35.95-54.57 111.68 51.02 139.5z"/></g><g fill="#FFFFFF" opacity=".2" transform="translate(288 523)"><circle cx="250" cy="110" r="110"/><circle cx="420" cy="78" r="60"/><circle cx="70" cy="220" r="70"/></g><g fill="#FFFFFF" fill-rule="nonzero" opacity=".08" transform="translate(135 316)"><path d="M10 80.22a14.2 14.2 0 0 1 20 0 14.2 14.2 0 0 0 20 0l20-19.86a42.58 42.58 0 0 1 60 0l15 14.9a21.3 21.3 0 0 0 30 0 21.3 21.3 0 0 1 30 0l.9.9A47.69 47.69 0 0 1 220 110H0v-5.76c0-9.02 3.6-17.67 10-24.02zm559.1-66.11l5.9-5.86c11.07-11 28.93-11 40 0l10 9.94a14.19 14.19 0 0 0 20 0 14.19 14.19 0 0 1 20 0 16.36 16.36 0 0 0 21.3 1.5l8.7-6.47a33.47 33.47 0 0 1 40 0l4.06 3.03A39.6 39.6 0 0 1 755 48H555a47.77 47.77 0 0 1 14.1-33.89z"/></g></g></svg>
      </div>
      <FlexCenteredDiv style={{flex: "2", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography variant="h1">
          404
        </Typography>
        <div style={{margin: "2rem 0 5rem 0",backgroundColor: "rgb(70,50,90)", width: "100px", height: "10px"}}></div>
        <Typography variant="h4">
          Deserted place, inhabitants: 1
        </Typography>
        <Button color="secondary" sx={{margin: "2rem 0"}} variant="contained" component={Link} to={"/"}>
          <Typography variant="h6">
            Go home
          </Typography>
          <HomeIcon/>
        </Button>
      </FlexCenteredDiv>
    </div>
  )
}

export default Page404