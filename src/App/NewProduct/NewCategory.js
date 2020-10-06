import React, { useState } from "react";

import styles from "./NewCategory.module.css";

export const NewCategory = (props) => {
  const [formValues, setFormValues] = useState({});
  const handleChangeInput = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    props.onSubmit(formValues);
    setFormValues({});
  };

  return (
    <form id="category" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Make new category"
        value={formValues.name || ""}
        onChange={handleChangeInput}
        className={styles.input}
      />
      <button
        form="category"
        type="submit"
        onClick={props.handleAdd}
        className={styles.add}
      >
        add
      </button>
    </form>
  );
};
