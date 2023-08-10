import { User } from "../types/types";
import { LocalUsers_URL } from "../mocks/URLs";
import { useAxiosGet } from "../hooks/useAxiosGet";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LocalUsers = () => {
  const [users] = useAxiosGet<User[] | null>(`${LocalUsers_URL}`, []);
  const [userToEdit, setUserToEdit] = useState<User>();

  const UserValidationSchema = yup.object().shape({
    name: yup.string().required("name is required!"),
    username: yup.string().required("username is required!"),
    email: yup.string().email().required("email is required!"),
    phone: yup.string().required("phone is required!"),
  });

  const navigate = useNavigate();

  const handleEditUser = (values: any) => {
    const { id, name, username, email, phone } = values;
    const user = {
      id,
      name,
      username,
      email,
      phone,
    };
    axios
      .put<User>(`${LocalUsers_URL}/${user.id}`, user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(() => setUserToEdit(undefined))
      .then(() => navigate(0));
    // console.log("user updated: ", JSON.stringify(user));
  };

  return (
    <>
      <h2>Users List</h2>
      <button
        onClick={() => {
          console.log("userToEdit: ", userToEdit);
        }}
      >
        console log userToEdit
      </button>
      <button
        onClick={() => {
          setUserToEdit(undefined);
        }}
      >
        clear userToEdit
      </button>
      {userToEdit === undefined ? (
        <ul>
          {users?.map((user) => {
            return (
              <li key={user.id}>
                <pre>{JSON.stringify(user)}</pre>
                <button
                  onClick={() => {
                    setUserToEdit(user);
                  }}
                >
                  select User
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          <h3>Edit User Form</h3>
          <Formik<User>
            initialValues={{
              id: userToEdit.id,
              name: userToEdit.name,
              username: userToEdit.username,
              email: userToEdit.email,
              phone: userToEdit.phone,
            }}
            validationSchema={UserValidationSchema}
            onSubmit={(values) => handleEditUser(values)}
          >
            {({ handleSubmit, values, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <label htmlFor="name">User ID</label>
                <Field
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <ErrorMessage name="name" />
                <Field
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="username"
                  value={values.username}
                  onChange={handleChange}
                />
                <ErrorMessage name="username" />

                <Field
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" />
                <Field
                  label="Phone No."
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <ErrorMessage name="phone" />

                <button type="submit">Update User</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default LocalUsers;
