import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";

vi.mock("../../hooks/usePost");
vi.mock("../../hooks/useAuth");

describe("LoginPage Integration Test", () => {
  it("should display validation errors if form fields are invalid", async () => {
    const mockExecutePost = vi.fn();

    usePost.mockReturnValue({
      data: { token: "mockToken" },
      loading: false,
      error: null,
      executePost: mockExecutePost,
    });

    useAuth.mockReturnValue({
      authToken: "mockAuthToken",
      login: vi.fn(),
      logout: vi.fn(),
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Simulate form submission without entering any data
    const submitButton = screen.getByText("Iniciar sesión");
    fireEvent.click(submitButton);

    // Check if validation errors appear
    expect(await screen.findAllByText("Este campo es obligatorio")).toHaveLength(2);
  });

  it("should display an error message if the API call fails", async () => {
    const mockExecutePost = vi.fn();

    usePost.mockReturnValue({
      data: null,
      loading: false,
      error: "Inicio de sesión fallido",
      executePost: mockExecutePost,
    });

    useAuth.mockReturnValue({
      authToken: "mockAuthToken",
      login: vi.fn(),
      logout: vi.fn(),
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Simulate user input
    fireEvent.input(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "Password123" },
    });

    // Simulate form submission
    const submitButton = screen.getByText("Iniciar sesión");
    fireEvent.click(submitButton);

    // Check if error message is displayed
    expect(await screen.findByText("Email o contraseña incorrectos")).toBeInTheDocument();
  });

  it("should submit the form and handle the API response", async () => {
    const mockExecutePost = vi.fn();
    const mockLogin = vi.fn();

    usePost.mockReturnValue({
      data: { token: "mockToken" },
      loading: false,
      error: null,
      executePost: mockExecutePost,
    });

    useAuth.mockReturnValue({
      login: mockLogin,
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Simulate user input
    fireEvent.input(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "password123" },
    });

    // Simulate form submission
    const submitButton = screen.getByText("Iniciar sesión");
    fireEvent.click(submitButton);

    // Ensure the post function was called with the correct data
    act(async () => {
      await waitFor(() =>
        expect(mockExecutePost).toHaveBeenCalledWith({
          email: "john.doe@example.com",
          password: "password123",
        })
      );

      // Check that the login function was called with the mock token
      expect(mockLogin).toHaveBeenCalledWith("mockToken");
    });
  });
});
