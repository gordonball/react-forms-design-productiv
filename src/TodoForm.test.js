import { render } from "@testing-library/react";
import TodoForm from "./TodoForm.js";

const todo = {
  id: 1,
  title: "Test",
  description: "Test",
  priority: 2
}

describe("TodoForm", function() {
  it("renders without crashing", function() {
    render(<TodoForm />);
  });

  it("matches snapshot", function() {
    const { container } = render(<TodoForm />);

    expect(container).toMatchSnapshot();
  });
});
