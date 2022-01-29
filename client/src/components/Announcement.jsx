import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #E879BB;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return (
        <Container>
            DEALS DEALS DEALS
        </Container>
    )
}

export default Announcement
