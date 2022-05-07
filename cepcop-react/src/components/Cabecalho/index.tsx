import Navbar from "./Navbar";
import {
    StyledHeader,
    Container,
    HeaderInfo,
    HeaderTitle,
    HeaderBox,
    HeaderUserName,
    HeaderUserImg,
} from "./stylesHeader";

const userImage: string = require("./../../img/vince-fleming2.jpg") as string;

export default function Header(props: { userName: string }) {
    return (
        <StyledHeader>
            <Container>
                <HeaderInfo>
                    <HeaderTitle>Painel Administrativo</HeaderTitle>
                    <HeaderBox>
                        <p>
                            Olá,
                            <HeaderUserName> {props.userName}!</HeaderUserName>
                        </p>
                        <HeaderUserImg
                            src={userImage}
                            alt="Imagem do Usuário"
                        />
                    </HeaderBox>
                </HeaderInfo>
            </Container>
            <Navbar />
        </StyledHeader>
    );
}
