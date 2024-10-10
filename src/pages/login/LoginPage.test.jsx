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

    const submitButton = screen.getByText("Iniciar sesión");
    fireEvent.click(submitButton);

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

    fireEvent.input(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "Password123" },
    });

    const submitButton = screen.getByText("Iniciar sesión");
    fireEvent.click(submitButton);

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

    fireEvent.input(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "password123" },
    });

    const submitButton = screen.getByText("Iniciar sesión");
    fireEvent.click(submitButton);

    act(async () => {
      await waitFor(() =>
        expect(mockExecutePost).toHaveBeenCalledWith({
          email: "john.doe@example.com",
          password: "password123",
        })
      );

      expect(mockLogin).toHaveBeenCalledWith("mockToken");
    });
  });
});
