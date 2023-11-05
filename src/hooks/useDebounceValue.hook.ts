import React, { useRef } from "react";

export const useDebounceValue = <T>(value: T, timeout?: number) => {
  const [searchValue, setSearchValue] = React.useState<T>(value);

  const handlerRef = useRef<NodeJS.Timeout | undefined>();

  React.useEffect(() => {
    handlerRef.current = setTimeout(function () {
      setSearchValue(value);
    }, timeout ?? 500);
    return () => {
      clearTimeout(handlerRef.current);
    };
  }, [value, timeout]);
  return searchValue;
};
