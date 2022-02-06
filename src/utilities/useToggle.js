import {useState} from 'react';

function useToggle (initialVal = false) {
  const [someState, setSomeState] = useState(initialVal);
  const toggle = () => {
    setSomeState(!someState)
  };
  return [someState, toggle];
}

export default useToggle;