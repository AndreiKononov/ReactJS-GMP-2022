import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../components/Footer/Footer';
import { Logo } from '../components/Logo/Logo';

export default {
  title: 'App Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}>
    <Logo />
  </Footer>
);

export const AppFooter = Template.bind({});
