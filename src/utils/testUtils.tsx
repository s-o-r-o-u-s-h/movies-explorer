import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { ComponentType, ReactElement } from 'react';

function render(
  ui: React.ReactElement,
  { route = '/', ...renderOptions } = {},
) {
  window.history.pushState({}, 'Test page', route);

  function Wrapper({ children }: { children: React.ReactNode }): ReactElement {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return rtlRender(ui, {
    wrapper: Wrapper as ComponentType,
    ...renderOptions,
  });
}

export * from '@testing-library/react';
export { render };
