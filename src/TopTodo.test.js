import { render } from "@testing-library/react";
import TopTodo from "./TopTodo.js";

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

describe("TopTodo", function() {
  it("renders without crashing", function() {
    render(<TopTodo todos={[todo1, todo2, todo3]} />);
  });

  it("matches snapshot", function() {
    const { container } = render(<TopTodo todos={[todo1, todo2, todo3]} />);

    expect(container).toMatchSnapshot();
  });

  it("displays the highest priority todo", function () {
    const result = render(<TopTodo todos={[todo1, todo2, todo3]} />);

    expect(result.queryByText("TestTitle1")).toBeInTheDocument();
    expect(result.queryByText("TestTitle2")).not.toBeInTheDocument();
    expect(result.queryByText("TestTitle3")).not.toBeInTheDocument();
  })
});
