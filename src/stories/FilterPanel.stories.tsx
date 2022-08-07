import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GenreTogglePanel as FilterPanel } from '../components/FilterPanel/FilterPanel';
import { genres } from '../containers/MoviesListOptionsContainer/genres';
import { withDarkBg } from '../../.storybook/decorators';

export default {
  title: 'Genres Panel',
  component: FilterPanel,
  argTypes: {
    handleSelect: { action: true },
  },
  decorators: [withDarkBg],
} as ComponentMeta<typeof FilterPanel>;

const Template: ComponentStory<typeof FilterPanel> = (args) => <FilterPanel {...args}></FilterPanel>;

export const GenresPanel = Template.bind({});
GenresPanel.args = {
  genres,
  selectedGenre: genres[1].value,
};
