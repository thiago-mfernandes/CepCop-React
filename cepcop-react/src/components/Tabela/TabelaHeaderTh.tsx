import { StyledTabelaHeaderTr } from "./styles";

interface IHeaderThProps {
    props: any;
}

const TabelaHeaderTh: React.FC<IHeaderThProps> = ({
    props
}: IHeaderThProps): JSX.Element => (
    <StyledTabelaHeaderTr>
        { props }
    </StyledTabelaHeaderTr>
);

export default TabelaHeaderTh;
