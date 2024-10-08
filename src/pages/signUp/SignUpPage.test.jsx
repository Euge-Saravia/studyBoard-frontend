import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SignUpPage from "./SignUpPage";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";

vi.mock("../../hooks/usePost");
vi.mock("../../hooks/useAuth");

describe("SignUpPage Integration Test", () => {
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
        <SignUpPage />
      </BrowserRouter>
    );

    const submitButton = screen.getByText("Registrarse");
    fireEvent.click(submitButton);

    expect(await screen.findAllByText("Este campo es obligatorio")).toHaveLength(3);
  });

  it("should display error message if the API call fails", async () => {
    const mockExecutePost = vi.fn();

    usePost.mockReturnValue({
      data: null,
      loading: false,
      error: "Registro fallido",
      executePost: mockExecutePost,
    });

    useAuth.mockReturnValue({
      authToken: "mockAuthToken",
      login: vi.fn(),
      logout: vi.fn(),
    });

    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );

    fireEvent.input(screen.getByPlaceholderText("Nombre"), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByPlaceholderText("Repite la contraseña"), {
      target: { value: "password123" },
    });

    const submitButton = screen.getByText("Registrarse");
    fireEvent.click(submitButton);

    expect(await screen.findByText("Error: Registro fallido")).toBeInTheDocument();
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
        <SignUpPage />
      </BrowserRouter>
    );

    fireEvent.input(screen.getByPlaceholderText("Nombre"), {
      target: { value: "John Doe" },
    });
    fireEvent.input(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByPlaceholderText("Repite la contraseña"), {
      target: { value: "password123" },
    });

    const submitButton = screen.getByText("Registrarse");
    fireEvent.click(submitButton);

    act(async () => {
      await waitFor(() =>
        expect(mockExecutePost).toHaveBeenCalledWith({
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123",
        })
      );

      await waitFor(() =>
        expect(mockExecutePost).toHaveBeenCalledWith({
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123",
        })
      );

      expect(mockLogin).toHaveBeenCalledWith("mockToken");
    });
  });
});
