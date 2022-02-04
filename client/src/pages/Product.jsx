import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Remove, Add } from "@material-ui/icons";



const Container = styled.div`
    color: white;
    ;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    background: #121212;
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover:
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border: solid 5px ${props=>props.border};
    border-radius:50%;
    background: ${props=>props.color};
    margin:0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select``

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px soild teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 1px solid #e879bb;
    background: black;
    font-weight: 50px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #e879bb;
    }
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
              <ImgContainer>
                  <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
              </ImgContainer> 
              <InfoContainer>
                  <Title>Gray Sweatshirt & Pants</Title>
                  <Desc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi dui, semper vitae ligula eget, rhoncus ornare purus. Aliquam eleifend ante consectetur neque efficitur, eget hendrerit metus pretium. Maecenas vitae magna et lectus tincidunt malesuada at in tellus. Vestibulum ante dolor, porttitor quis vehicula vel, accumsan sit amet purus. Vestibulum eget purus et urna varius mollis. Proin vel nibh quis purus luctus sollicitudin. Nunc ut velit ex. Donec in bibendum ex, sit amet suscipit leo. Integer consequat blandit sem, id semper risus commodo vitae. Pellentesque eget mattis dui. Curabitur finibus efficitur nisi eget ornare. Integer egestas maximus pretium.
                  </Desc>
                  <Price>$20</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color="white" border="#e879bb"></FilterColor>
                          <FilterColor color="black" border="white"></FilterColor>
                          <FilterColor color="white" border="black"></FilterColor>
                          <FilterColor color="black" border="#e879bb"></FilterColor>
                      </Filter>

                      <Filter>
                      <FilterTitle>Size</FilterTitle>
                      <FilterSize>
                          <FilterSizeOption>XS</FilterSizeOption>
                          <FilterSizeOption>S</FilterSizeOption>
                          <FilterSizeOption>M</FilterSizeOption>
                          <FilterSizeOption>L</FilterSizeOption>
                          <FilterSizeOption>XL</FilterSizeOption>
                          <FilterSizeOption>2XL</FilterSizeOption>
                      </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>

                      <AmountContainer>
                          <Remove/>
                          <Amount>1</Amount>
                          <Add/>
                      </AmountContainer>
                      <Button>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer> 
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
