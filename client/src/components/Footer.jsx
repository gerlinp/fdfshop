import styled from "styled-components"
import { Facebook, Instagram, MailOutline, Phone } from "@material-ui/icons";
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    color: white;
    ${mobile({ flexDirection: "column"})};
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    color: #E879BB;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #E879BB;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;


`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;
    color: #E879BB;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`

const ListItem =styled.li`
    width: 50%;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ background: "#121212"})};
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;

`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>FEAR DRIVES FAITH</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet. Eum accusamus harum aut aliquam soluta qui omnis optio et nobis laborum aut ducimus vero ea vitae aliquam. Nam fuga earum sit voluptatem voluptatem et consequuntur iure et numquam nihil.
                </Desc>
                <SocialContainer >
                    <SocialIcon>
                    <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                    <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>HOME</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>T-Shirts</ListItem>
                  <ListItem>Hoodies</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>(774)274-4136
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>feardfaith@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
