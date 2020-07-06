import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 250,
    config: config.wobbly,
  });

  return (
    <span>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="/create">Create</a>
            <a href="https://github.com/daviskeene/Hotplotit">Code</a>
          </NavLinks>
        </FlexContainer>
      </NavBar>
    </span>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  font-size: 1.4rem;
`;

export const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #BD3381;
      border-bottom: 1px solid #BD3381;
    }
    @media (max-width: 768px) {
      display: none;
    }
    font-family: "Archivo Black", sans-serif;
  }
`;