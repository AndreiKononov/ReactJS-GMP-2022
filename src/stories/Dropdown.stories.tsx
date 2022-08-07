import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Dropdown } from '../components/Dropdown/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    handleSelect: { action: true },
    handleClose: { action: true },
  },
} as ComponentMeta<typeof Dropdown>;

const items = [
  {
    id: 1,
    title: 'Edit',
  },
  {
    id: 2,
    title: 'Delete',
  },
];

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  items,
};

export const ClickEdit = Template.bind({});
ClickEdit.args = {
  items,
};

ClickEdit.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const editButton = await canvas.getByText('Edit');
  await userEvent.click(editButton);
  await expect(args.handleSelect).toHaveBeenCalled();
};

export const ClickClose = Template.bind({});
ClickClose.args = {
  items,
};

ClickClose.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const closeButton = await canvas.getByRole('button');
  await userEvent.click(closeButton);
  await expect(args.handleClose).toHaveBeenCalled();
};
