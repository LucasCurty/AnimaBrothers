/* Hook cycle.

This hook takes 2 parameters
 (<callback> = function, <delay> = do timeout).
  It starts by clearing the useRef timeout but the useRef starts (null), after the callback is executed it assigns it to the useRef value, every time a new callback is executed it deletes the old one*/

/*Ciclo do hook. 

Esse hook recebe 2 parametos
 (<callback> = function, <delay> = do timeout).
  Ele começa limpando o timeout do useRef porem o useRef inicia (null), depois que a callback for executada ele atribui ela ao valor do useRef, toda vez que uma nova callback é executada ele apaga a antiga  */

import { useRef } from 'react';

export default function useDebounce(fn : any, delay : number) {
    
  const timeoutRef = useRef<any | null>(null);

  function debouncedFn(...args : any) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
