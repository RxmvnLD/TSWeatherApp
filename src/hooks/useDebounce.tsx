import { useEffect, useMemo } from "react";
import debounce from "../helpers/debounce";

const useDebounce = <A = unknown, R = void>(
  fn: (args: A) => R,
  delay: number
): ((args: A) => Promise<R>) => {
  const [debouncedFn, teardown] = useMemo(
    () => debounce(fn, delay),
    [fn, delay]
  );
  useEffect(() => {
    return teardown();
  }, [fn, delay]);

  return debouncedFn;
};

export default useDebounce;
