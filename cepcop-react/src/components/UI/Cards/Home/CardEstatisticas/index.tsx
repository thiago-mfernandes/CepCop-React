import ContainerBox from "./ContainerBox";
import ContainerGrafico from "./ContainerGrafico";
import ContainerGraficoBox from "./ContainerGraficoBox";
import ContainerLegenda from "./ContainerLegenda";
import Indicador from "./Indicador";
import LegendaMes from "./LegendaMes";
import { StyledEstatisticas } from "./styled";
import Titulo from "./Titulo";

function Estatisticas() {
    return (
        <StyledEstatisticas>
            <Titulo titulo="Cadastros este mês e no mês passado:" />
            <ContainerLegenda>
                <ContainerBox>
                    <LegendaMes legenda="Mês anterior:"/>
                    <Indicador />
                </ContainerBox> 
                <ContainerBox>
                    <LegendaMes legenda="Este mês:"/>
                    <Indicador verde />
                </ContainerBox>           
            </ContainerLegenda>
            <ContainerGrafico>
                <ContainerGraficoBox>
                    
                </ContainerGraficoBox>
            </ContainerGrafico>

        </StyledEstatisticas>
    )
}

export default Estatisticas