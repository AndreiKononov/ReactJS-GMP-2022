import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoviesListCard from '../components/MovieListCard/MovieListCard';
import { movies } from '../mocks/movies';

export default {
  title: 'MoviesListCard',
  component: MoviesListCard,
  argTypes: {
    handleSelect: { action: true },
    handleClose: { action: true },
  },
} as ComponentMeta<typeof MoviesListCard>;

const Template: ComponentStory<typeof MoviesListCard> = (args) => <MoviesListCard {...args} />;

export const MovieCard = Template.bind({});
MovieCard.args = {
  movie: movies[1],
};

export const MovieCardImgError = Template.bind({});
MovieCardImgError.args = {
  movie: { ...movies[1], poster_path: 'https://img.notfound' },
};
