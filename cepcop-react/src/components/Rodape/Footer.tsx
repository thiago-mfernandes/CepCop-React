import { StyledFooterInfo } from "./styles";

interface IFooterProps {
    children: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = ({
    children,
}: IFooterProps): JSX.Element => (
    <StyledFooterInfo>{children}</StyledFooterInfo>
);

export default Footer;
