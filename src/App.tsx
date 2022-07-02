import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useSpring } from "framer-motion"
import logo from './logo.svg';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const width = document.body.clientWidth * 0.75;

  return (
    <div className="App">
      <Header>
        <Sidebar width={width} isOpen={isOpen} setOpen={setOpen} />
        <HeaderTitle>てすと</HeaderTitle>
      </Header>
      <Overlay
        animate={isOpen ? 'show' : 'hide'}
        variants={{
          show: { opacity: 0.65 },
          hide: { opacity: 0 },
        }}
      />
    </div>
  );
}

interface Props {
  width: number;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({width, isOpen, setOpen}: Props) => {
  const x = useSpring(0, { stiffness: 400, damping: 40 });

  return (
    <Container>
      <MenuButton
        onClick={() => {
          setOpen(!isOpen)
          console.log({isOpen})
          isOpen ? x.set(-width) : x.set(0);
        }}
       >≡</MenuButton>
      <SidebarContainer
        width={width}
        initial={{ x: -width }}
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

const MenuButton = styled.div`
  position: fixed;
  padding: 8px;
  top: 0;
  cursor: pointer;
  z-index: 3;
`

const SidebarContainer = styled(motion.div)<{width: number}>`
  position: fixed;
  top: 0;
  width: ${({width}) => width}px;
  height: 100%;
  background-color: white;
  z-index: 2;
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.65;
  z-index: 1;
`
