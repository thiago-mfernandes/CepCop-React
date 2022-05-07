import { branco } from "src/components/UI/variaveis";
import styled from "styled-components";
import ContainerBox from "./ContainerBox";
import ContainerGrafico from "./ContainerGrafico";
import ContainerGraficoBox from "./ContainerGraficoBox";
import ContainerLegenda from "./ContainerLegenda";
import Indicador from "./Indicador";
import LegendaMes from "./LegendaMes";
import Titulo from "./Titulo";

const StyledEstatisticas = styled.section`
    background-color: ${branco};
    border-radius: 24px;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.15);
    grid-column: 1 / 5;
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-row: 6 / 9;
        box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.15);
    }
`;

export default function Estatisticas() {
    return (
        <StyledEstatisticas>
            <Titulo titulo="Cadastros este mês e no mês passado:" />
            <ContainerLegenda>
                <ContainerBox>
                    <LegendaMes legenda="Mês anterior:" />
                    <Indicador />
                </ContainerBox>
                <ContainerBox>
                    <LegendaMes legenda="Este mês:" />
                    <Indicador verde />
                </ContainerBox>
            </ContainerLegenda>
            <ContainerGrafico>
                <ContainerGraficoBox> </ContainerGraficoBox>
            </ContainerGrafico>
        </StyledEstatisticas>
    );
}
