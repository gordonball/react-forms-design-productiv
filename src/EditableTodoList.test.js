import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList.js";

const todo1 = {
  id: 1,
  title: "TestTitle1",
  description: "TestDescription1",
  priority: 1
}

const todo2 = {
  id: 2,
  title: "TestTitle2",
  description: "TestDescription2",
  priority: 2
}

const todo3 = {
  id: 3,
  title: "TestTitle3",
  description: "TestDescription3",
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

  it("displays all of the todos", function () {
    const result = render(
      <EditableTodoList todos={[todo1, todo2, todo3]} />
    );

    expect(result.queryByText("TestTitle1")).toBeInTheDocument();
    expect(result.queryByText("TestTitle2")).toBeInTheDocument();
    expect(result.queryByText("TestTitle3")).toBeInTheDocument();
  })
});
