import { StyledCardPrincipal } from "./styled";

function CardConfiguracoes(props: {children: React.ReactNode}) {
    return (
        <StyledCardPrincipal>
            {props.children}
        </StyledCardPrincipal>
    );
}

export default CardConfiguracoes
