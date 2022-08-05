import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { jest } from '@storybook/jest';
import { Header } from '../components/Header/Header';
import { Logo } from '../components/Logo/Logo';
import { AddMovieBtn } from '../components/AddMovieBtn/AddMovieBtn';
import { withDarkBg } from '../../.storybook/decorators';

export default {
  title: 'App Header',
  component: Header,
  decorators: [withDarkBg],
  layout: 'fullscreen',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>
    <Logo />
    <AddMovieBtn handleClick={jest.fn()} />
  </Header>
);

export const AppHeader = Template.bind({});
