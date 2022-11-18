import { render } from "@testing-library/react";
import Footer from "./Footer.js";

describe("Footer", function() {
  it("renders without crashing", function() {
    render(<Footer />);
  });

  it("matches snapshot", function() {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });

  it("renders with correct text", function() {
    const text = render(<Footer />);

    expect(text.queryByText(
      "Prødutïv is copyright ©2020 by Flüffy Data Enterprises, Inc."
    )).toBeInTheDocument();
  });
});
