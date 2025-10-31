import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
    test("shows errors on submit", () => {
        render(<ContactForm />);
        fireEvent.click(screen.getByText("Submit"));
        expect(screen.getByText("Name required")).toBeInTheDocument();
        expect(screen.getByText("Email required")).toBeInTheDocument();
    });
});
