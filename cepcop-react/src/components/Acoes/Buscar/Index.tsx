import styled from "styled-components";
import { cinzaEscuro } from "../../UI/variaveis";
import InputPadrao from "src/components/UI/Input/InputPadrao";
import Container from "../Container";
import Output from "src/components/UI/Output";

const StyledConteudo = styled.p`
    color: ${cinzaEscuro};
    font-size: 1rem;
    font-style: italic;
    font-weight: lighter;
    //margin-left: 5%;
`;

export default function Buscar() {
    return (
        <>
            <InputPadrao
                typeInput="text"
                placeholderInput="Pesquise..."
                nameInput=""
                ariaDescribedbyInput=""
            />
            <Container
                borderBottom="0px"
                paddingBottom={"0px"}
                justifyContentDireita
            >
                <StyledConteudo>Mostrar</StyledConteudo>
                <Output valor={10} /> {/*mockar o dado aqui*/}
                <StyledConteudo>entradas</StyledConteudo>
            </Container>
        </>
    );
}
