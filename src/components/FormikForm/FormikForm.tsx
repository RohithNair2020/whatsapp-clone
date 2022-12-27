import React from 'react';
import {
    Formik,
    Field,
    Form,
} from 'formik';
import { MapKV } from '../../Types';

interface FormikProps {
    initialValues?: MapKV;
}

const FormikForm = (props: FormikProps) => {
    const { initialValues } = props;
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={initialValues!}
                onSubmit={() => { }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="john@acme.com"
                        type="email"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

FormikForm.defaultProps = {
    initialValues: {},
};

export default FormikForm;
