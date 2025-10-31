import styled from "styled-components";

const Btn = styled.button`
    margin-top: 10px;
    padding: 8px 12px;
    background: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: .3s;
    &:hover { filter: brightness(1.1); }
`;

export default function RetryButton({ onRetry }) {
    return
    <Btn onClick={onRetry}>Retry</Btn>;
}
