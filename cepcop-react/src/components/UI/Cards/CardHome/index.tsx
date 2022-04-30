import CardAtendidos from "../CardAtendidos";
import CardFilaEspera from "../CardFilaEspera";
import CardHoje from "../CardHoje/Index";
import CardNaoAtendidos from "../CardNaoAtendidos";
import { StyledHomeCard } from "./styled";

function HomeCard() {
    return <StyledHomeCard>
        <CardHoje />
        <CardFilaEspera />
        <CardAtendidos />
        <CardNaoAtendidos />

    </StyledHomeCard>;
}

export default HomeCard;
