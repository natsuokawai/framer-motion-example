import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <Header>
        <MenuButton>≡</MenuButton>
        <HeaderTitle>タイトル</HeaderTitle>
      </Header>
    </div>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderTitle = styled.div`
  margin-left: 8px;
`

const MenuButton = styled.div`
  cursor: pointer;
`
