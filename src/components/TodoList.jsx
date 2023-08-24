import { useState } from "react";

const TodoList = ({ token }) => {
  const [content, setContent] = useState("");

  const addTodo = () => {};

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <h2>Todo list</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="content"
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          <span>新增代辦事項</span>
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">代辦事項</th>
            <th scope="col">處理情形</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shopping</td>
            <td>未完成</td>
            <td>
              <button className="btn btn-danger btn-sm">刪除</button>
              <button className="btn btn-primary btn-sm">更新</button>
              <button className="btn btn-secondary btn-sm">變更處理狀態</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
