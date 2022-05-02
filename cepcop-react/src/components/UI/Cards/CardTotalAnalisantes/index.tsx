import TotalCadastros from "../Titulos/TotalCadastros";
import { StyledTotalAnalisantes } from "./styled";
import Container from "./Container";
import { MdListAlt } from "react-icons/md";
import Quantidade from "../Quantidade/Quantidade";
import ContainerTotal from "./ContainerTotal";
import Titulo from "./Titulo";
import ContainerNaoRelacionados from "./ContainerNaoRelacionados";

function CardTotalAnalisants() {
    return (
        <StyledTotalAnalisantes>
            <TotalCadastros totalCadastros="Total de Analisantes:" />
            <Container>
                <MdListAlt
                    style={{
                        color: "#787887",
                        fontSize: "2rem",
                        fontWeight: 700,
                        padding: 0,
                    }}
                />
                <Quantidade quantidade={31} />
            </Container>
            <ContainerTotal>
                <Titulo titulo="Total de analisantes que não estão na fila:" />
            </ContainerTotal>
            <ContainerNaoRelacionados>
                <MdListAlt
                    style={{
                        color: "#787887",
                        fontSize: "2rem",
                        fontWeight: 700,
                        padding: 0,
                    }}
                />
                <Quantidade quantidade={31} />
            </ContainerNaoRelacionados>
        </StyledTotalAnalisantes>
    );
}

export default CardTotalAnalisants;
