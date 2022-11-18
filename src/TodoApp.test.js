import { fireEvent, getByLabelText, render } from "@testing-library/react";
import TodoApp from "./TodoApp.js";

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

  it("checks if delete button removes todo, if no todos show message", function () {
    const result = render(
      <TodoApp initialTodos={[todo3]} />
    );

    // queryAllByText to account for top todo, actual todo is at first index
    expect(result.queryAllByText("TestTitle3")[0]).toBeInTheDocument();
    expect(result.queryAllByText("TestTitle3").length).toEqual(2);

    expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();

    fireEvent.click(result.queryByText("Del"));

    expect(result.queryByText("TestTitle3")).not.toBeInTheDocument();
    expect(result.queryByText("You have no todos.")).toBeInTheDocument();

  });

  it("checks if updating form saves changes", function () {
    const result = render(
      <TodoApp initialTodos={[todo3]} />
    );

    fireEvent.click(result.queryByText("Edit"));

    // queryAllByText to account for top todo, actual todo is at first index
    const titleInput = (result.getAllByLabelText("Title")[0]);
    fireEvent.change(titleInput, { target: { value: "Title 4" } })
    fireEvent.click(result.queryAllByText("Gø!")[0]);

    expect(result.queryAllByText("Title 4")[0]).toBeInTheDocument();
    expect(result.queryAllByText("Title 4").length).toEqual(2);

  });

  it("adds new todo", function () {
    const result = render(
      <TodoApp initialTodos={[]} />
    );

    expect(result.queryByText("You have no todos.")).toBeInTheDocument();

    const titleInput = (result.getByLabelText("Title"));
    fireEvent.change(titleInput, { target: { value: "New Todo" } })

    const descriptionInput = (result.getByLabelText("Description"));
    fireEvent.change(descriptionInput, { target: { value: "New Description" } })

    fireEvent.click(result.queryByText("Gø!"));

    expect(result.queryAllByText("New Todo")[0]).toBeInTheDocument();
    expect(result.queryAllByText("New Todo").length).toEqual(2);
    expect(result.queryAllByText("New Description")[0]).toBeInTheDocument();
    expect(result.queryAllByText("New Description").length).toEqual(2);

    expect(result.queryByText("You have no todos.")).not.toBeInTheDocument();

  });
});
