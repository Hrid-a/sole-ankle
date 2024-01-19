import styled from "styled-components"
import Header from "./components/Header"
import ShoeIndex from "./components/ShoeIndex";
import { useState } from "react";

function App() {
  const [sortId, setSortId] = useState("newest")
  return (
    <>
      <Header />
      <Wrapper>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
  padding:64px 32px;
`;

export default App
