import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(0,0,0,0.5), 
        rgba(0,0,0,0.5)
        ), 
        url("./images/maybe.jpg") center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background: #121212;
    color: white;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    color: #e879bb;
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0; 
    padding: 10px;  
    ${'' /* background: #121212; */}
    color: #e879bb;

`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    background: #e879bb;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <Button>Login</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT!</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
