import { Provider } from 'react-redux';
import { Story } from '@storybook/react';
import { dummyStore } from '../src/store';

export const withProvider = (Story: Story) => (
  <Provider store={dummyStore}>
    <Story />
  </Provider>
);

export const withDarkBg = (Story: Story) => (
  <div style={{ backgroundColor: '#232323', minHeight: '100vh' }}>
    <Story />
  </div>
);
