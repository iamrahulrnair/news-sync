import { mount } from 'reachme/reachmeApp';
import React, { useRef, useEffect } from 'react';

export default function Reachme() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
}
