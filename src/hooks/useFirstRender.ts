import * as React from 'react';

export default function useFirstRender(): boolean {
  const mountedRef = React.useRef(false);
  React.useEffect(() => {
    mountedRef.current = true;
  });

  return mountedRef.current;
}
