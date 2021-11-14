import { mount } from 'newsbox/NewsBoxApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function NewsBox({isSignedIn}) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initalPath: history.location.pathname,
      onNavigate: (location) => {
        const { pathname: nextPathname } = location;
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      isSignedIn
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}
