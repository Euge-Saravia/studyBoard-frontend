import { render, fireEvent, screen } from "@testing-library/react";
import CopyButton from "./CopyButton"
import { expect, vi } from "vitest";

const copyMock = vi.fn();

vi.mock("../../../hooks/useCopyToClipboard", () => ({
    _esModule: true,
    default: () => [vi.fn(), false],
}));

describe("CopuButton Component", () => {
    it("renders correctly with 'Copy' text initially", ()  => {
        render(<CopyButton textToCopy="Hello" />);
        const button = screen.getByRole("button", { name: /copy/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Copy");
    });

    it("changes text to 'Copied!' when clicked", () => {
        render(<CopyButton textToCopy="Hello" />);
        const button = screen.getByRole("button", { name: /copy/i });

        fireEvent.click(button);

        expect(button).toHaveTextContent("Copied!");
    });

    it("calls the onClick function when clicked", () => {
        const handleClick = vi.fn();
        render(<CopyButton textToCopy="Hello" onClick={handleClick} />);

        const button = screen.getByRole("button", { name: /copy/i });

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("calls copy function from the hook when clicked", () => {
        vi.mock("../../../hooks/useCopyToClipboard", () => ({
            _esModule: true,
            default: () => [copyMock, false],
        })); 

        render(<CopyButton textToCopy="Hello World!" />);

        const button = screen.getByRole("button", { name: /copy/i });

        fireEvent.click(button);

        expect(copyMock).toHaveBeenCalledWith("Hello World!");
    })
});