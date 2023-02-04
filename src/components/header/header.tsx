import React, {useState, useEffect} from 'react'
import styled, { createGlobalStyle } from "styled-components";
import { Home, BookOpen, Phone } from "react-feather";
import piscinaImg from '../../images/piscina1.jpg';
import { Link } from "react-router-dom";

const Header = () => {
    const [windowDimension, setWindowDimension] = useState<number|null>(null);
    useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimension && windowDimension <= 640;
  return (
    <Styles.Wrapper>
      <CSSReset />

      {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.Items>
            <MobileNavbar.ItemLink to='/'>
              <MobileNavbar.Icon>
                <Home size={16} />
              </MobileNavbar.Icon>
              Home
            </MobileNavbar.ItemLink>
            <MobileNavbar.ItemLink to='/catalog'>
                
              <MobileNavbar.Icon>
                <BookOpen size={16} />
              </MobileNavbar.Icon>
              Catálogo
              
            
            </MobileNavbar.ItemLink>
            <MobileNavbar.ItemLink to='/contact'>
              <MobileNavbar.Icon>
                <Phone size={16} />
              </MobileNavbar.Icon>
              Contacto
            </MobileNavbar.ItemLink>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
      ) : (
        <Navbar.Wrapper>
          <Navbar.Logo>Norpol</Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item><Link to='/'>Home</Link></Navbar.Item>
            <Navbar.Item><Link to='/catalog'>Catálogo</Link></Navbar.Item>
            <Navbar.Item><Link to='/contact'>Contacto</Link></Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      )}
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    
  `
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #f2f2f2;
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `
};

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    position: fixed;
    width: 100vw;
    bottom: 0;

    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.2rem;
  `,
  ItemLink: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
  `,
  Icon: styled.span``
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default Header