import CardAtendidos from "../CardAtendidos";
import CardFilaEspera from "../CardFilaEspera";
import CardHoje from "../CardHoje/Index";
import { StyledHomeCard } from "./styled";

function HomeCard() {
    return <StyledHomeCard>
        <CardHoje />
        <CardFilaEspera />
        <CardAtendidos />

    </StyledHomeCard>;
}

export default HomeCard;
