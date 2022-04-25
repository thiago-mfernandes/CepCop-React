import { Container } from "./styles";

interface OutputPros {
    valor: number;
}

const Output: React.FC<OutputPros> = ({ valor }) => (
    <Container>{valor}</Container>
);

export default Output;
