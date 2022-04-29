import ContainerData from "./ContainerData";
import ContainerInfo from "./ContainerInfo";
import Data from "./Data";
import DiaSemana from "./DiaSemana";
import { StyledCardHoje } from "./styled";
import TituloCardHoje from "./TituloCardHoje";

function CardHoje() {
    const dataHoje: string = new Date().toDateString();
    return (
        <StyledCardHoje>
            {/* 1.titulo-home card(TITULO GENERICO) tem um estilo
                2.titulo-homecard--card-hoje (TITULO CARDHOJE) tem outro estilo
                3.titulo-home-card--card-total-analisantes (TITULO ANALISANTES)outro estilo
            */}
            <TituloCardHoje conteudo='Cadastros Hoje:'/>
            <ContainerInfo>
                <ContainerData>
                    
                    <Data dataHoje={`${dataHoje}`}/>{/* tratar o dado aqui */}
                    <DiaSemana dia="Sexta"/>{/* tratar o dado aqui */}
                </ContainerData>
                   <div className="card-cadHoje__containerTotal">
                       <p className="card-cadHoje__totalCadastros">21</p>
                       <i className="material-icons">checklist</i>
                   </div>
            </ContainerInfo>
        </StyledCardHoje>
    );
}

export default CardHoje;
