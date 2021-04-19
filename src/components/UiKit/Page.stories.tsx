import * as React from 'react';
import Page from './Page';
import { Meta } from '@storybook/react';
import { H3 } from './Typography';

export default {
  title: 'Page',
  component: Page,
} as Meta;

export const BasicPage = () => {
  return (
    <Page>
      <H3>Here is a test page</H3>
      <p className="mv-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
        animi, at excepturi illum iusto nisi recusandae saepe velit vitae. Alias
        assumenda atque distinctio dolores facere, facilis impedit praesentium
        vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        beatae blanditiis dicta dignissimos distinctio eaque eum in ipsam
        necessitatibus nostrum nulla, odit officia pariatur porro provident
        saepe totam ullam voluptates.
      </p>
    </Page>
  );
};
