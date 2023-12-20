import { useEffect } from "react";

export function useKey(key, action) {
  const normalizeKey = key.toLowerCase();

  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === normalizeKey) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, normalizeKey]
  );
}
