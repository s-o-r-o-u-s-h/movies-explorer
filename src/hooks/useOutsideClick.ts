import * as React from 'react';
import { useEffect } from 'react';

export default function useOutsideClick(
  ref: React.MutableRefObject<any>,
  cb: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cb, ref]);
}
