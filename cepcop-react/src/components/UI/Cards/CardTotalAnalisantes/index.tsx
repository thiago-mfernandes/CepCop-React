import TotalCadastros from "../Titulos/TotalCadastros";
import { StyledTotalAnalisantes } from "./styled";
import Container from "./Container";
import { MdListAlt } from "react-icons/md";
import Quantidade from "../Quantidade/Quantidade";
import ContainerTotal from "./ContainerTotal";
import Titulo from "./Titulo";
import ContainerNaoRelacionados from "./ContainerNaoRelacionados";
import IconList from "./IconList";

function CardTotalAnalisants() {
    return (
        <StyledTotalAnalisantes>
            <TotalCadastros totalCadastros="Total de Analisantes:" />
            <Container>
                <IconList />                
                <Quantidade quantidade={31} />
            </Container>
            <ContainerTotal>
                <Titulo titulo="Total de analisantes que não estão na fila:" />
            </ContainerTotal>
            <ContainerNaoRelacionados>
                <IconList />
                <Quantidade quantidade={31} />
            </ContainerNaoRelacionados>
        </StyledTotalAnalisantes>
    );
}

export default CardTotalAnalisants;
