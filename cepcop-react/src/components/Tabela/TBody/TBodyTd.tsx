import { StyledTBodyTd } from "../styles";

interface IBodyTdProps {
    children: React.ReactNode;
    dataLabel: string;
}

const TBodyTd: React.FC<IBodyTdProps> = ({
    children,
    dataLabel,
}: IBodyTdProps): JSX.Element => (
    <StyledTBodyTd data-label={dataLabel}>{children}</StyledTBodyTd>
);

export default TBodyTd;
