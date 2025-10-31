import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Card = styled.div`
    max-width: 400px;
    margin: 20px auto;
    padding: 24px;
    border-radius: 12px;
    background: ${({ theme }) => theme.card};
    box-shadow: ${({ theme }) => theme.shadow};
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 8px;
`;

const Button = styled.button`
    padding: 10px 14px;
    background: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
`;

export default function ContactForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name required"),
      email: Yup.string().email("Invalid email").required("Email required"),
    }),
    onSubmit: (values) => {
      alert("Form submitted!\n" + JSON.stringify(values, null, 2));
    }
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <p>{formik.errors.name}</p>}

        <Input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
