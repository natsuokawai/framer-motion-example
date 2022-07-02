import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useSpring } from "framer-motion"
import logo from './logo.svg';

const App = () => {
  
  return (
    <div className="App">
      <Header>
        <Sidebar />
        <HeaderTitle>タイトル</HeaderTitle>
      </Header>
    </div>
  );
}

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)
  const x = useSpring(0, { stiffness: 400, damping: 40 });

  return (
    <Container>
      <MenuButton
        onTap={() => {
          setOpen(!isOpen)
          console.log({isOpen})
          isOpen ? x.set(-300) : x.set(0);
        }}
       >≡</MenuButton>
      <SidebarContainer
        className='hogehoge'
        initial={{ x: -300 }}
        style={{ x }}
      >
        <img src={logo} className="App-logo" alt="logo" /> 
      </SidebarContainer>
    </Container>
  )
}

export default App;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderTitle = styled.div`
  padding: 8px;
  margin-left: 16px;
`

const Container = styled.div``

const MenuButton = styled(motion.div)`
  position: fixed;
  padding: 8px;
  top: 0;
  cursor: pointer;
  z-index: 1;
`

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: white;
`
