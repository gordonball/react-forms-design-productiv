import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList.js";

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

describe("EditableTodoList", function() {
  it("renders without crashing", function() {
    render(<EditableTodoList todos={[todo1, todo2, todo3]} />);
  });

  it("matches snapshot", function() {
    const { container } = render(
      <EditableTodoList todos={[todo1, todo2, todo3]} />
    );

    expect(container).toMatchSnapshot();
  });
});
