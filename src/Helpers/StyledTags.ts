import styled from "@emotion/styled";

export const DivContentTable = styled.div`
  flex: 2 2 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
` 

export const DivLikeTable = styled.div`
  height: 100%;
  min-width: 500px;
  display: flex;
  margin: 0 1rem;
  padding: .5rem 1rem;
  border-radius: .2rem;
  border: 1px solid gray;
  flex-direction: column;
  overflow: hidden;
`

export const DivLikeThead = styled.div`
  padding: .3rem 0;
  display: flex;
  // flex: 1;
  text-align: center;
  border-bottom: 2px solid gray;
  & * {
    flex: 1;
  }
`

export const DivLikeTbody = styled.div`
  // flex: 1
  margin: .3rem 0;
  display: flex;
  height: 70%;
  flex-direction: column;
  text-align: center;
  overflow: auto;
`

export const DivLikeRow = styled.div`
  // flex: 12;
  display: flex;
  border-radius: 0.2rem;
`