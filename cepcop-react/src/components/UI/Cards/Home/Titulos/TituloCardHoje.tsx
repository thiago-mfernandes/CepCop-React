import {StyledTituloCardHoje} from './styled';

function TituloCardHoje(props: {conteudo: string}) {
    return (
        <StyledTituloCardHoje>{props.conteudo}</StyledTituloCardHoje>
    )
}

export default TituloCardHoje;