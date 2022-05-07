import styled from "styled-components";
import IChildProp from "../Interfaces/IChildProp";

const StyledTable = styled.table`
    background-color: rgba(231, 231, 233, 0.7);
    border-radius: 12px 12px 0 0;
    box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.15);
    margin: 1.5% 1.5% 5%;
    //overflow para o border-radius aparecer;
    overflow: hidden;
    table-layout: fixed;
    width: 97%;
    word-wrap: break-word;
    @media screen and (max-width: 768px) {
        display: block;
        width: 95%;
        margin: 0 auto;
    }
`;

export default function Table(props: IChildProp) {
    return <StyledTable>{props.children}</StyledTable>;
}
