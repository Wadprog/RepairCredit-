import { useState } from "react";

function useToogle(intial = false) {
  const [state, setstate] = useState(intial);
  const Toogle = () => {
    setstate(!state);
  };
  return [state, Toogle];
}
export default useToogle;
