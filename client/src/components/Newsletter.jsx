import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
    height: 60vh;
    background-color: #121212;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    color: white;
`
const Title = styled.h1`
    font-size: 55px;
    margin: 20px;
    color: #E879BB;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300px;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center"})};
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background: #121212;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E879BB;
    ${mobile({ width: "80%"})};
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    background: #121212;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background: #E879BB;
    color: black;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
