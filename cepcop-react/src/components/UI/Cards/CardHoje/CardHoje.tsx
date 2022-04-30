import { MdChecklist } from "react-icons/md";
import ContainerData from "./ContainerData";
import ContainerInfo from "./ContainerInfo";
import ContainerTotal from "./ContainerTotal";
import Data from "./Data";
import DiaSemana from "./DiaSemana";
import { StyledCardHoje } from "./styled";
import TituloCardHoje from "./TituloCardHoje";
import TotalCadastros from "./TotalCadastros";

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
                <ContainerTotal>
                    <TotalCadastros totalCadastros="21"/>{/* mockar o dado */}
                    <MdChecklist 
                        style={{
                            fontSize: '2rem',
                            padding: '0 0',
                        }}
                    />
                </ContainerTotal>                   
            </ContainerInfo>
        </StyledCardHoje>
    );
}

export default CardHoje;
