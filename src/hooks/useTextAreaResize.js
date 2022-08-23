import { useEffect } from 'react';


const useTextAreaResize = (ref, value, initialHeight) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = '0px';
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + initialHeight + "px";
    }
  }, [ref, value, initialHeight]);

};

export default useTextAreaResize;
