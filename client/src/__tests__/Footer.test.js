import { render, screen } from "@testing-library/react"
import Footer from "../Footer";
import "@testing-library/jest-dom";

test("Footer component loaded", () => {
    
    render(<Footer />);

    const footerText = screen.getByTestId("footer");
    expect(footerText).toBeInTheDocument();

})