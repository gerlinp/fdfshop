
import { Search} from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import { Nav,Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../landing-logo.png'




const img = styled.img`
height: 50px;
`

const Input =  styled.input`
     border: none;
     background: transparent;
     color: white;
     width: 100%;
`
 const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    ${'' /* margin-left: 25px; */}
    max-width: 50vw;
    padding: 8px 20px 8px 20px !important;
`
const MainNavbar = () => {
    return (   
        <Navbar bg="dark" expand="md" sticky="top" variant="dark">
            <Navbar.Brand  variant="dark" href="#home">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Register</Nav.Link>
                <Nav.Link href="#link">Sign in</Nav.Link>
                <SearchContainer>
                   <Input placeholder="search"/>
                   <Search style={{color:"gray", fontSize:16}}/>
               </SearchContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar




