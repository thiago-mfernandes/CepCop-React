import ContainerInfo from "./ContainerInfo";
import { StyledCardHoje } from "./styled";
import TituloCardHoje from "./TituloCardHoje";

function CardHoje() {
    return (
        <StyledCardHoje>
            {/* 1.titulo-home card(TITULO GENERICO) tem um estilo
                2.titulo-homecard--card-hoje (TITULO CARDHOJE) tem outro estilo
                3.titulo-home-card--card-total-analisantes (TITULO ANALISANTES)outro estilo
            */}
            <TituloCardHoje conteudo='Cadastros Hoje:'/>
            <ContainerInfo>
            <div className="card-cadHoje__containerData">
                       <p className="card-cadHoje__data">02/02/2022</p>
                       <p className="card-cadHoje__diaSemana">Sexta-feira</p>
                   </div>
                   <div className="card-cadHoje__containerTotal">
                       <p className="card-cadHoje__totalCadastros">21</p>
                       <i className="material-icons">checklist</i>
                   </div>
            </ContainerInfo>
        </StyledCardHoje>
    );
}

export default CardHoje;
