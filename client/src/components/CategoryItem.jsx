import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    flex:1;
    margin: 5px;
    height: 70vh;
    position: relative
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
        ${mobile({ height: "20vh"})}
`
const Info = styled.div`
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-shadow: #474747 3px 5px 2px, 3px 1px 20px #000000;

`
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #E879BB;
    color: white;
    cursor: pointer;
    font-weight:600;

`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
