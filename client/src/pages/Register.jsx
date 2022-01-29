import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    min-width: 320px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ), 
        url("https://images.unsplash.com/photo-1613165025388-68935d0eb81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80") center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
    background: #121212;
    color: white;
    ${mobile({ width: "75%", flexDirection: "column"})};
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    color: #e879bb;
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex:1;
    min-width: 170px;
    margin: 20px 10px 0px  0px; 
    padding: 10px;  
    ${'' /* background: #121212; */}
    color: #e879bb;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    background: #e879bb;
    cursor: pointer;
    ${mobile({ width: "75%", flexDirection: "column"})};
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>By Creating and account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
