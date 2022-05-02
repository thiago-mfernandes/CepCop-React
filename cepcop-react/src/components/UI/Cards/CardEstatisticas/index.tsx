import ContainerBox from "./ContainerBox";
import ContainerLegenda from "./ContainerLegenda";
import { StyledEstatisticas } from "./styled";
import Titulo from "./Titulo";

function Estatisticas() {
    return (
        <StyledEstatisticas>
            <Titulo titulo="Cadastros este mês e no mês passado:" />
            <ContainerLegenda>
            <ContainerBox>
                <p className="estatisticas__container-legenda___mes">Mês anterior:</p>
                <span className="estatisticas__container-legenda___indicador"></span>
            </ContainerBox>    
            
            
            </ContainerLegenda>

        </StyledEstatisticas>
    )
}

export default Estatisticas