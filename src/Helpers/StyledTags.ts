import styled from "@emotion/styled";

export const DivContentTable = styled.div`
flex: 1 1 0px;
display: flex;
justify-content: center;
align-items: center;
word-break: break-word;
`

export const DivLikeTable = styled.div`
  flex: 1;
  min-width: 500px;
  margin: 0 1rem;
  padding: .5rem 1rem;
  border-radius: .2rem;
  border: 1px solid gray;
  // overflow: hidden;
  // #body > div:nth-of-type(even) {
  //   background-color: "#d4d4d4";
  //   color:"#fff";
  // }
`

export const DivLikeThead = styled.div`
  padding: .3rem 0;
  display: flex;
  text-align: center;
  border-bottom: 2px solid gray;
  & * {
    flex: 1;
  }
`

export const DivLikeTbody = styled.div`
  margin: .3rem 0;
  display: flex;
  // height: 85%;
  flex-direction: column;
  text-align: center;
  // overflow: auto;
`

export const DivLikeRow = styled.div`
  display: flex;
  flex: 1;
  border-radius: 0.2rem;
`