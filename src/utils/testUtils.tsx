import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './mockedStore';

function render(
  ui: React.ReactElement,
  { route = '/', ...renderOptions } = {},
) {
  window.history.pushState({}, 'Test page', route);

  function Wrapper({
    children,
  }: {
    children: React.ReactNode;
  }): React.ReactElement {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, {
    wrapper: Wrapper as React.ComponentType,
    ...renderOptions,
  });
}

export * from '@testing-library/react';
export { render };
