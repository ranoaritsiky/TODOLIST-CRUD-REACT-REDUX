import { useFormik } from "formik";

import { add_todo } from "../Store/Actions";

import { connect } from "react-redux";

const TodoForm = ({todoUpdateIndex,add_todo}) => {
  const formik = useFormik({
    initialValues: {
      todoName: "",
      description: "",
    },
    onSubmit: (values) => {
      if (!values.todoName) {
        alert("Todo title must be filled");
      } else if (!values.description) {
        alert("Todo description must be filled");
      } else {
        add_todo({
          name: values.todoName,
          description: values.description,
        });
        //!reset form here
        formik.resetForm();
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Todo tilte</label>
        <input
          id="name"
          name="todoName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.todoName}
        />
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default connect(null, { add_todo })(TodoForm);
