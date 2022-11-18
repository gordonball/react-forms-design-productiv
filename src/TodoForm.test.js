import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm.js";

describe("TodoForm", function() {
  it("renders without crashing", function() {
    render(<TodoForm />);
  });

  it("matches snapshot", function() {
    const { container } = render(<TodoForm />);

    expect(container).toMatchSnapshot();
  });

  it("adds new todo and clears form on submission", function () {
    const handleSave = jest.fn()

    const result = render(
      <TodoForm handleSave={handleSave} />
    );

    const titleInput = (result.getByLabelText("Title"));
    fireEvent.change(titleInput, { target: { value: "New Todo" } })

    const descriptionInput = (result.getByLabelText("Description"));
    fireEvent.change(descriptionInput, { target: { value: "New Description" } })

    fireEvent.click(result.queryByText("Gø!"));

    expect(handleSave).toHaveBeenCalledTimes(1);

    expect(titleInput).toHaveValue("");
    expect(descriptionInput).toHaveValue("");
  });

  it("passes priority as an integer", function () {

    function handleSave(formData) {
      expect(formData.priority).toEqual(expect.any(Number));
    }

    const result = render(
      <TodoForm handleSave={handleSave} />
    );

    fireEvent.click(result.queryByText("Gø!"));
    expect.assertions(1);
  });

});
