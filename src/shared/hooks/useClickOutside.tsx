import { RefObject, useCallback, useEffect } from "react";

type ClickOutsideHandler = () => void;

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: ClickOutsideHandler
) => {
  const handleClick = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (element && !element.contains(event.target as Node)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [handleClick]);

  return ref;
};
