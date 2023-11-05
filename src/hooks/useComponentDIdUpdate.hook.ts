import { useEffect, useRef, DependencyList } from "react";
export const useComponentDidUpdate = (
  func: () => any,
  deps: DependencyList
) => {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    func();
  }, [func, deps]);
};
