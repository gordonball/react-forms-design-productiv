import { render } from "@testing-library/react";
import TodoApp from "./TodoApp.js";

const todo1 = {
  id: 1,
  title: "Test1",
  description: "Test2",
  priority: 1
}

const todo2 = {
  id: 2,
  title: "Test2",
  description: "Test2",
  priority: 2
}

const todo3 = {
  id: 3,
  title: "Test3",
  description: "Test3",
  priority: 3
}

describe("TodoApp", function() {
  it("renders without crashing", function() {
    render(<TodoApp initialTodos={[todo1, todo2, todo3]} />);
  });

  it("matches snapshot", function() {
    const { container } = render(
      <TodoApp initialTodos={[todo1, todo2, todo3]} />
    );

    expect(container).toMatchSnapshot();
  });
});
