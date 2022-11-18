import { render } from "@testing-library/react";
import Todo from "./Todo.js";

const todo = {
  id: 1,
  title: "Test",
  description: "Test",
  priority: 2
}

describe("Todo", function() {
  it("renders without crashing", function() {
    render(<Todo todo={todo} />);
  });

  it("matches snapshot", function() {
    const { container } = render(<Todo todo={todo} />);

    expect(container).toMatchSnapshot();
  });
});
