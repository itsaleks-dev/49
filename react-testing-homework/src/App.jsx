import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import { useTheme } from "./hooks/useTheme";

import UserProfile from "./features/user/UserProfile";
import ContactForm from "./features/contact/ContactForm";

import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
    const { themeName, toggleTheme } = useTheme();
    const theme = themeName === "dark" ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <button onClick={toggleTheme}>Toggle Theme</button>

            <ErrorBoundary>
                <UserProfile />
            </ErrorBoundary>

            <ContactForm />
        </ThemeProvider>
    );
}
