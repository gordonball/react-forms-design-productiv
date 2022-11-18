import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo.js";

const todo = {
  id: 1,
  title: "Test Title",
  description: "Test Description",
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

  it("contains correct fields", function() {
    const result = render(<EditableTodo todo={todo} />);

    expect(result.queryByText("Test Title")).toBeInTheDocument();
    expect(result.queryByText("Test Description")).toBeInTheDocument();
    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Del")).toBeInTheDocument();
    expect(result.queryByText("None")).not.toBeInTheDocument();
  });

  it("calls delete when delete button is clicked", function() {
    const removeMock = jest.fn();
    removeMock.mockClear();

    const result = render(<EditableTodo todo={todo} remove={removeMock} />);

    fireEvent.click(result.queryByText("Del"));

    expect(removeMock).toHaveBeenCalledTimes(1);
  });

  it("shows go button when edit button is clicked", function () {

    const result = render(<EditableTodo todo={todo}/>);
    expect(result.queryByText("Gø!")).not.toBeInTheDocument();
    expect(result.queryByText("(priority: 2)")).toBeInTheDocument();

    fireEvent.click(result.queryByText("Edit"));

    expect(result.queryByText("Gø!")).toBeInTheDocument();
    expect(result.queryByText("(priority: 2)")).not.toBeInTheDocument();
  })

  it("checks if Go button calls update function", function () {

    const updateMock = jest.fn();
    updateMock.mockClear();

    const result = render(<EditableTodo todo={todo} update={updateMock} />);

    fireEvent.click(result.queryByText("Edit"));

    fireEvent.click(result.queryByText("Gø!"));

    expect(updateMock).toHaveBeenCalledTimes(1);

  })
});
