import { render } from "@testing-library/react";
import TodoForm from "./TodoForm.js";

describe("TodoForm", function() {
  it("renders without crashing", function() {
    render(<TodoForm />);
  });

  it("matches snapshot", function() {
    const { container } = render(<TodoForm />);

    expect(container).toMatchSnapshot();
  });
});
