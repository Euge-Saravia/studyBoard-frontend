import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SignUpPage from "./SignUpPage";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";

// Mock custom hooks
vi.mock("../../hooks/usePost");
vi.mock("../../hooks/useAuth");

describe("SignUpPage Integration Test", () => {
  it("should display validation errors if form fields are invalid", async () => {
    const mockExecutePost = vi.fn();

    // Mocking the behavior of `usePost`
    usePost.mockReturnValue({
      data: { token: "mockToken" }, // Simulate successful API response
      loading: false,
      error: null,
      executePost: mockExecutePost, // This will allow us to track if the function is called
    });

    // Mocking the behavior of `useAuth`
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

    // Simulamos el envío del formulario sin datos
    const submitButton = screen.getByText("Registrarse");
    fireEvent.click(submitButton);

    // Verificamos si los mensajes de error aparecen
    expect(await screen.findAllByText("Este campo es obligatorio")).toHaveLength(3);
  });

  it("should display error message if the API call fails", async () => {
    const mockExecutePost = vi.fn();

    // Simulamos un error en la respuesta de la API
    usePost.mockReturnValue({
      data: null,
      loading: false,
      error: "Registro fallido",
      executePost: mockExecutePost,
    });

    // Mocking the behavior of `useAuth`
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

    // Simulamos la entrada de datos del usuario
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

    // Simulamos el envío del formulario
    const submitButton = screen.getByText("Registrarse");
    fireEvent.click(submitButton);

    // Esperamos a que se muestre el mensaje de error
    expect(await screen.findByText("Error: Registro fallido")).toBeInTheDocument();
  });

  it("should submit the form and handle the API response", async () => {
    const mockExecutePost = vi.fn();
    const mockLogin = vi.fn();

    // Simulamos las respuestas del hook usePost
    usePost.mockReturnValue({
      data: { token: "mockToken" },
      loading: false,
      error: null,
      executePost: mockExecutePost,
    });

    // Simulamos el comportamiento del hook useAuth
    useAuth.mockReturnValue({
      login: mockLogin,
    });

    render(
      <BrowserRouter>
        <SignUpPage />
      </BrowserRouter>
    );

    // Simulamos la entrada de datos del usuario
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

    // Simulamos el envío del formulario
    const submitButton = screen.getByText("Registrarse");
    fireEvent.click(submitButton);

    // Esperamos a que la función de ejecución del post sea llamada con los datos correctos
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

      // Verificamos que el login se haya llamado con el token recibido
      expect(mockLogin).toHaveBeenCalledWith("mockToken");
    });
  });
});
