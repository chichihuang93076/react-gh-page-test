import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TodoList = ({ token }) => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoEdit, setTodoEdit] = useState({});

  const site = "https:/todolist-api.hexschool.io";

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    console.log(token);
    try {
      const res = await axios.get(`${site}/todos/`, {
        headers: {
          Authorization: token,
        },
      });
      if (res.data.status) {
        setTodos(res.data.data);
      }
      //console.log(todos);
    } catch (error) {
      setMessage(error.mssage);
    }
  };

  //刪除代辦事項
  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`${site}/todos/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      if (res.data.status) {
        getTodos();
      }
    } catch (error) {
      setMessage(error.mssage);
    }
  };

  //變更todo狀態
  const toggleTodo = async (id) => {
    try {
      const res = await axios.patch(
        `${site}/todos/${id}/toggle`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (res.data.status) {
        getTodos();
      }
    } catch (error) {
      setMessage(error.mssage);
    }
  };

  //修改todo內容
  const editTodo = async (id) => {
    try {
      const res = await axios.put(
        `${site}/todos/${id}`,
        {
          content: todoEdit,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (res.data.status) {
        setTodoEdit("");
        getTodos();
      }
    } catch (error) {
      setMessage(error.mssage);
    }
  };

  //新增代辦事項
  const addTodo = async () => {
    try {
      const res = await axios.post(
        `${site}/todos/`,
        {
          content: content,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
      if (res.data.status) {
        setContent("");
        getTodos();
        setMessage("新增成功");
      } else {
        setMessage("新增失敗" + res.data.message);
      }
    } catch (error) {
      setMessage("新增失敗：" + error.message);
    }
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <h2>Todo list</h2>
      <p>{message}</p>
      <div className="input-group mb-3">
        <input
          value={content}
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
            <th scope="col">更新代辦事項</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.content}</td>
              <td>{todo.status ? "完成" : "未完成"}</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="todoEdit"
                  placeholder="更新值"
                  onChange={(e) => setTodoEdit(e.target.value)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTodo(todo.id)}
                >
                  刪除
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => editTodo(todo.id)}
                >
                  更新
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => toggleTodo(todo.id)}
                >
                  變更處理狀態
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
