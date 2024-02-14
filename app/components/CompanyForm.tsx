'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import LogoUploader from './LogoUploader';
import InputFields from './InputFields';
import Button from './Button';

export type CompanyFieldsValues = {
  name: string;
  status: string;
  country: string;
  category: string;
  date: string;
  description: string;
};

const initialValues: CompanyFieldsValues = {
  name: '',
  status: '',
  country: '',
  category: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldsValues) => void | Promise<void>;
}

const CompanyForm = ({ onSubmit }: CompanyFormProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="mb-0.5 text-xl">Add new company</p>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1 gap-5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputFields label="Status" placeholder="Status" name="status" />
            <InputFields label="Country" placeholder="Country" name="country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputFields label="Name" placeholder="Name" name="name" />
            <InputFields
              label="Category"
              placeholder="Category"
              name="category"
            />
            <InputFields label="Date" placeholder="Date" name="date" />
            <InputFields
              label="Description"
              placeholder="Description"
              name="description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
};

export default CompanyForm;
