import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '../components/TextField/TextField';
import { Formik } from 'formik';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <Formik initialValues={{ textfield: '' }} onSubmit={() => {}}>
    <TextField {...args} />
  </Formik>
);

export const Input = Template.bind({});
Input.args = {
  label: 'Input',
  name: 'textfield',
  id: 'input-id',
  textarea: false,
  type: 'text',
  placeholder: 'Input placeholder',
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'Textarea',
  name: 'textfield',
  id: 'textarea-id',
  textarea: true,
  placeholder: 'Textarea placeholder',
};
