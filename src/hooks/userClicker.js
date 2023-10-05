import { useEffect, useState } from "react";


const useClicker = (initialCuunt = 0) => {
  const [count, setCount] = useState(initialCuunt);

  useEffect(() => {

    const handelClick = () => {
      setCount((prevCount) => prevCount + 1)}

    window.addEventListener("click", handelClick)
    
    return () => {
      window.removeEventListener('click', handelClick)
    };
  }, []);

  return count
}

export default useClicker;