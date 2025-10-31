import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { vi } from "vitest";
import * as api from "./api";

vi.mock("./api");

describe("UserProfile", () => {
  test("shows loading", () => {
    api.getUser.mockImplementation(() => new Promise(() => {}));

    render(<UserProfile />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  test("shows user", async () => {
    api.getUser.mockResolvedValueOnce({
      data: { name: "Aleks", email: "test@mail.com" },
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByTestId("user")).toBeInTheDocument();
    });
  });

  test("shows error + retry", async () => {
    api.getUser.mockRejectedValueOnce(new Error("err"));
    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByTestId("error")).toBeInTheDocument();
    });
    
    expect(screen.getByText("Retry")).toBeInTheDocument();
  });
});
