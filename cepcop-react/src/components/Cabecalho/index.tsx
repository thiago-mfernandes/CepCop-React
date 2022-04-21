import Navbar from "./Navbar";
import styled from "styled-components";
import {cinzaClaro, cinzaEscuro, azulEscuroFosco} from "../UI/variaveis";
const userImage: string = require("./../../img/vince-fleming2.jpg") as string;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${cinzaClaro};
    box-shadow: 4px 0px 20px 0px rgba(0,0,0,.25);
    padding: 3.5% 0 0;
    //----------------------------------------------->
    @media screen and (min-width:0px) and (max-width:768px) {
        box-shadow: 0 4px 50px 0 rgba(0,0,0,.15);
        margin-bottom: 12.5%;
        
    }     
`

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const HeaderInfo = styled.div`
    width: 100%;
`

const HeaderTitle = styled.h1`
    color: ${cinzaEscuro};
    font-size: 75%;
    font-style: italic;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    text-align: center;

    //----------------------------------------->
    @media screen and (min-width:0px) and (max-width:768px) {
        padding-left: 5%;
        text-align: left;
    }
`

const HeaderUserImg = styled.img`

        box-shadow: 4px 4px 50px 0px rgba(0,0,0,.5);
        clip-path: circle();
        margin: 0 6% 0 5%;
        width: 7.5%;

        //-------------------------------------------->
        @media screen and (min-width:0px) and (max-width:768px) {
            filter: drop-shadow(14px 14px 50px rgba(0,0,0,.5));
            width: 15%;
            max-width: 65px;
        }
`

const HeaderUserName = styled.span`
    font-size: 1rem;
    color: ${azulEscuroFosco};
    font-family: 'Lato' sans-serif;

    //-------------------------------------------->
    @media screen and (min-width:0px) and (max-width:768px) {
        font-size: 1.125rem;
        font-style: italic;
        padding-left: 5%;
    }
`

function Header(props: any) {

    const UserName: string = props.nome;

    return (
        <StyledHeader>
            <Container>
                <HeaderInfo>
                    <HeaderTitle>Painel Administrativo</HeaderTitle>
                    <div>
                        <p>Olá 
                            <HeaderUserName>
                                {UserName}
                            </HeaderUserName>                        
                        </p>
                        <HeaderUserImg src={userImage} alt="Imagem do Usuário" />
                    </div>
                </HeaderInfo>
            </Container>
            <Navbar />
        </StyledHeader>
    )
}

export default Header;