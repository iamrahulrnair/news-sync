import { mount } from 'newsBox/NewsBoxApp';
import React, { useRef, useEffect } from 'react';

export default function NewsBox() {
  useEffect(() => {
    mount(ref.current);
  }, []);
  const ref = useRef(null);

  return <div ref={ref}></div>;
}
