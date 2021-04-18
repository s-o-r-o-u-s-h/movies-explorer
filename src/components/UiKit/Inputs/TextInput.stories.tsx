import * as React from 'react';

import TextInput from './TextInput';
import { IconName } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Text input',
  component: TextInput,
};

export const BasicInput = (): React.ReactNode => {
  const [value, setValue] = React.useState('');

  return (
    <TextInput
      onChange={setValue}
      value={value}
      placeholder="Enter a text..."
    />
  );
};
BasicInput.story = {
  name: 'Basic Input',
};

export const InputwithIcon = (props: { icon?: IconName }): React.ReactNode => {
  const [value, setValue] = React.useState('');

  return (
    <TextInput
      {...props}
      onChange={setValue}
      value={value}
      placeholder="Enter a text..."
    />
  );
};
InputwithIcon.story = {
  name: 'Input witch icon',
  args: {
    icon: 'search',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['coffee', 'search', 'calculator'],
      },
    },
  },
};
