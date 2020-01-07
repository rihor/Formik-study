import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import Select from "../Select";
import DatePicker from "../DatePicker";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Minimo de dois caracterers")
    .required("Nome de usuário deve ser inserido"),
  fruits: Yup.array().min(1, "É necessário uma fruta no minimo"),
  date: Yup.string().required("A data é necessária")
});

const fruits = [
  { id: 1, label: "banana" },
  { id: 2, label: "maçã" },
  { id: 3, label: "abacaxi" }
];

export default function MyForm() {
  return (
    <Formik
      initialValues={{ username: "", fruits: [], date: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values));
        resetForm();
      }}
    >
      {props => (
        <Form>
          <div>
            <label>Username</label>
            <Field
              type="text"
              placeholder="Seu nome de usuário"
              name="username"
            />
            {props.touched.username && props.errors.username && props && (
              <div>{props.errors.username}</div>
            )}
          </div>

          <div>
            <Select
              name="fruits"
              options={fruits}
              multiple
              value={props.values.fruits}
              onChange={props.setFieldValue}
              onBlur={props.setFieldTouched}
              error={props.errors.fruits}
              touched={props.touched.fruits}
            />
          </div>

          <div>
            <DatePicker
              name="date"
              value={props.values.date}
              onChange={props.setFieldValue}
              onBlur={props.setFieldTouched}
              error={props.errors.date}
              touched={props.touched.date}
            />
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
          <button
            type="button"
            onClick={() => {
              props.setValues({
                username: "Manjaro",
                fruits: [{ id: 2, label: "maçã", date: "" }]
              });
            }}
          >
            Mudar o conteudo do formulário
          </button>
        </Form>
      )}
    </Formik>
  );
}
