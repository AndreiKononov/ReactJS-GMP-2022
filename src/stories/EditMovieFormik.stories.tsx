import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditMovieFormik from '../components/EditMovieFormik/EditMovieFormik';
import { movies } from '../mocks/movies';
import { withDarkBg, withProvider } from '../../.storybook/decorators';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Edit Movie Form',
  component: EditMovieFormik,
  argTypes: {
    handleClose: { action: true },
  },
  decorators: [withProvider, withDarkBg], // adding redux store provider
} as ComponentMeta<typeof EditMovieFormik>;

const Template: ComponentStory<typeof EditMovieFormik> = (args) => <EditMovieFormik {...args} />;

export const EditMovieFormEmpty = Template.bind({});
EditMovieFormEmpty.args = {
  movie: null,
};

EditMovieFormEmpty.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  const titleInput = await canvas.getByPlaceholderText('Title');
  await userEvent.type(titleInput, 'Title');

  const submitBtn = await canvas.getByText('Submit');
  await userEvent.click(submitBtn);

  expect(args.handleClose).not.toHaveBeenCalled();
};

export const EditMovieFormFilled = Template.bind({});
EditMovieFormFilled.args = {
  movie: movies[1],
};
