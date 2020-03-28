import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    q: Yup.string()
      .required('Required'),
  });

const Basic = () => (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
            fetch('/api/search?q=' + values.q)
            .then(res => res.json())
            .then((data) => {
                setSubmitting(false);
                alert(JSON.stringify(data));
            });
        }}
      >
        {({ errors, isSubmitting, touched }) => (
          <Form>
             {errors.q && touched.q ? <div>{errors.q}</div> : null}
            <Field name="q" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );

function UserInput(props) {
    return <div>
        <Basic/>
    </div>
}

export default UserInput;