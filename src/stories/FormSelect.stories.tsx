import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormSelect } from '../components/FormSelect/FormSelect';
import { Formik } from 'formik';
import { sortOptions } from '../containers/MoviesListOptionsContainer/sortOptions';
import { genres } from '../containers/MoviesListOptionsContainer/genres';
import { withDarkBg } from '../../.storybook/decorators';

export default {
  title: 'FormSelect',
  component: FormSelect,
  decorators: [withDarkBg],
} as ComponentMeta<typeof FormSelect>;

/* Single-select unselected */
const SingleSelectUnselectedTemplate: ComponentStory<typeof FormSelect> = (args) => (
  <Formik initialValues={{ formSelect: '' }} onSubmit={() => {}}>
    <FormSelect {...args} />
  </Formik>
);

export const SingleSelect = SingleSelectUnselectedTemplate.bind({});

SingleSelect.args = {
  name: 'formSelect',
  inputId: 'single-select',
  label: 'Single Select',
  placeholder: 'Select single value',
  options: sortOptions,
};

/* Single-select selected */
const SingleSelectSelectedTemplate: ComponentStory<typeof FormSelect> = (args) => (
  <Formik initialValues={{ formSelect: sortOptions[0] }} onSubmit={() => {}}>
    <FormSelect {...args} />
  </Formik>
);

export const SingleSelectSelectedValue = SingleSelectSelectedTemplate.bind({});
SingleSelectSelectedValue.args = {
  name: 'formSelect',
  inputId: 'single-select',
  label: 'Single Select',
  placeholder: 'Select single value',
  options: sortOptions,
};

/* Multi-select unselected */
const MultiSelectUnselectedTemplate: ComponentStory<typeof FormSelect> = (args) => (
  <Formik initialValues={{ formSelect: '' }} onSubmit={() => {}}>
    <FormSelect {...args} />
  </Formik>
);

export const MultiSelect = MultiSelectUnselectedTemplate.bind({});
MultiSelect.args = {
  isMulti: true,
  name: 'formSelect',
  inputId: 'multi-select',
  label: 'Multi Select',
  placeholder: 'Select multiple values',
  options: genres,
};

/* Multi-select selected */
const MultiSelectSelectedTemplate: ComponentStory<typeof FormSelect> = (args) => (
  <Formik initialValues={{ formSelect: [genres[1], genres[2]] }} onSubmit={() => {}}>
    <FormSelect {...args} />
  </Formik>
);

export const MultiSelectSelected = MultiSelectSelectedTemplate.bind({});
MultiSelectSelected.args = {
  isMulti: true,
  name: 'formSelect',
  inputId: 'multi-select',
  label: 'Multi Select',
  placeholder: 'Select multiple values',
  options: genres,
};
