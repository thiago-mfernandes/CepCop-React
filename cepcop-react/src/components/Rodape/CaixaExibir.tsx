import { StyledFooterCaixaExibir } from "./styles";
import IChildProp from "../Interfaces/IChildProp";

const CaixaExibir: React.FC<IChildProp> = ({
    children,
}: IChildProp): JSX.Element => (
    <StyledFooterCaixaExibir>{children}</StyledFooterCaixaExibir>
);

export default CaixaExibir;
