import React from 'react';

import { Button } from './Button';
import ButtonX from 'story_remote/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};


export const Primary = (args) => {
  return (
    <Button {...args}/>
  )
};
export const Primary2  = (args) => {
  return (
    <ButtonX {...args}/>
  )
};

