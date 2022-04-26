import { StyledFooterInfo } from "./styles";

interface IFooterInfo {
    texto: string;
}

const FooterInfo: React.FC<IFooterInfo> = ({
    texto,
}: IFooterInfo): JSX.Element => (
    <StyledFooterInfo>{texto}</StyledFooterInfo>
);

export default FooterInfo;
