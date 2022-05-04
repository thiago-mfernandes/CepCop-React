import { StyledConfigPage } from "./styled";

function CardConfiguracoes(props: {children: React.ReactNode}) {
    return (
        <StyledConfigPage>
            {props.children}
        </StyledConfigPage>
    );
}

export default CardConfiguracoes