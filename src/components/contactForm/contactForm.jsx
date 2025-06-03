import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import css from "./contactForm.module.css";

export const ContactForm = () => {

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short! Minimum 3 characters.")
      .max(50, "Too Long! Maximum 50 characters.").required("Required"),
    number: Yup.string()
      .min(9, "Too short! Minimum 3 characters.")
      .max(9, "Too long! Maximum 50 characters.").required("Required"),
});


  const initialValues = {
    name: '',
    number: ''
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
		dispatch(addContact(values));
		actions.resetForm();
	};


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}>
      <Form className={css.form}>
        <div className={css.label}>
          <label >Username</label>
          <Field className={css.field} type="text" name="name"  />
          <ErrorMessage name="name" component="div" />
        </div>

        <div className={css.label}>
          <label>Number</label>
          <Field className={css.field} type="tel" name="number"  />
          <ErrorMessage name="number" component="div" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
			</Form>
    </Formik>
  );
};




