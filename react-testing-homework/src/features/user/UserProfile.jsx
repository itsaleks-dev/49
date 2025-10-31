import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getUser } from "./api";

import RetryButton from "../../components/RetryButton";

const Card = styled.div`
    max-width: 400px;
    margin: 40px auto;
    padding: 24px;
    border-radius: 12px;
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};
`;

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const load = () => {
        setLoading(true);
        setError(null);

        const controller = new AbortController();
        getUser(controller.signal)
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load user");
                setLoading(false);
            });

        return () => controller.abort();
    };

    useEffect(load, []);

    if (loading) return <p data-testid="loading">Loading...</p>;
    if (error)
        return (
            <>
                <p data-testid="error">{error}</p>
                <RetryButton onRetry={load} />
            </>
        );

    return (
        <Card data-testid="user">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </Card>
    );
}
