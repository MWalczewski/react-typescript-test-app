import { Todo } from "../types/types";
import { LocalTodos_URL } from "../mocks/URLs";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LocalTodos = () => {
  const [localTodos] = useAxiosGet<Todo[] | null>(`${LocalTodos_URL}`, []);

  const TodoValidationSchema = yup.object().shape({
    userId: yup.number().min(0).max(4).required("userId is required!"),
    title: yup.string().required("title is required!"),
    completed: yup.boolean().required("completed status is required!"),
  });

  const navigate = useNavigate();

  const handleAddTodo = (values: any) => {
    const { id, userId, title, completed } = values;
    const todo = {
      id,
      userId,
      title,
      completed,
    };
    axios.post<Todo>(`${LocalTodos_URL}`, todo, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("new todo added: ", JSON.stringify(todo));
    navigate(0);
  };

  return (
    <>
      <button onClick={() => console.log("local Todos: ", localTodos)}>
        localTodos console
      </button>
      <h2>Add Todo Form</h2>
      <Formik<Todo>
        initialValues={{
          userId: "",
          id: 0,
          title: "",
          completed: false,
        }}
        validationSchema={TodoValidationSchema}
        onSubmit={(values) => handleAddTodo(values)}
      >
        {({ handleSubmit, values, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="userId">User ID</label>
            <Field
              label="User ID"
              type="number"
              name="userId"
              placeholder="User ID"
              value={values.userId}
              onChange={handleChange}
            />
            <ErrorMessage name="userId" />
            <Field
              label="Title"
              type="text"
              name="title"
              placeholder="title"
              value={values.title}
              onChange={handleChange}
            />
            <ErrorMessage name="title" />

            <Field
              label="Completed Status"
              type="checkbox"
              name="completed"
              onChange={handleChange}
            />
            <ErrorMessage name="completed" />

            <button className="button" type="submit">
              Add To Do Item
            </button>
          </Form>
        )}
      </Formik>
      <h2>Local Todos List</h2>
      <ul>
        {localTodos?.map((todo) => {
          return (
            <li key={todo.id}>
              <pre>{JSON.stringify(todo)}</pre>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LocalTodos;
