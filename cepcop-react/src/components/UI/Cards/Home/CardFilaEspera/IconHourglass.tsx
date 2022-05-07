import { MdHourglassBottom } from "react-icons/md";
import styled from "styled-components";

const StyledMdHourglassBottom = styled.i`
    color: #787887;
    font-size: 2rem;
    font-weight: 70;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function IconHourglass() {
    return (
        <StyledMdHourglassBottom>
            <MdHourglassBottom />
        </StyledMdHourglassBottom>
    );
}
