import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Grid } from 'semantic-ui-react';

import { DiagnosisSelection, TextField } from './FormField';
import { useStateValue } from '../state';
import { NewEntry, EntryType } from '../types';

export type EntryFormValues = NewEntry;

interface Props {
  onSubmit: (values: EntryFormValues) => void;
}

// export const typeOptions: TypeOption[] = [
//   { value: EntryType.HealthCheck, label: "Health Check" },
//   { value: EntryType.Hospital, label: "Hospital" },
//   { value: EntryType.OccupationalHealthcare, label: "Occupational Healthcare" }
// ];

const AddEntryForm: React.FC<Props> = ({ onSubmit }) => {
  const [{ diagnoses }] = useStateValue()

  return (
    <Formik
    initialValues={{
      type: EntryType.HealthCheck,
      description: '',
      specialist: '',
      diagnosisCodes: undefined
    }}
    onSubmit={onSubmit}
    validate={values => {
      const requiredError = "Field is required";
      const errors: { [field: string]: string } = {};
      if (!values.type) {
        errors.type = requiredError;
      }
      if (!values.description) {
        errors.description = requiredError;
      }
      if (!values.specialist) {
        errors.specialist = requiredError;
      }
      return errors;
    }}
  >
    {({ isValid, dirty, setFieldValue, setFieldTouched }) => {

      return (
        <Form className="form ui">
          <Field
            label="Description"
            placeholder="Description"
            name="description"
            component={TextField}
          />
          <Field
            label="Specialist"
            placeholder="Specialist"
            name="specialist"
            component={TextField}
          />
          <DiagnosisSelection
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            diagnoses={Object.values(diagnoses)}
          />    
          <Grid>
              <Grid.Column floated="left" width={5}>
                {/* <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button> */}
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
        </Form>
      );
    }}
  </Formik>
  );
};

export default AddEntryForm;