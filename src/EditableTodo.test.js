import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo.js";

const todo = {
  id: 1,
  title: "Test",
  description: "Test",
  priority: 2
}

describe("EditableTodo", function() {
  it("renders without crashing", function() {
    render(<EditableTodo todo={todo} />);
  });

  it("matches snapshot", function() {
    const { container } = render(<EditableTodo todo={todo} />);

    expect(container).toMatchSnapshot();
  });
});
