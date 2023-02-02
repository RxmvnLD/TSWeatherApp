//Los argumentos pueden ser de cualquier tipo, por eso se utilizan genéricos
/*Con una tupla definimos el retorno de 2 funciones
La primera función es la que se va a ejecutar y
la segunda es la que va a cancelar la ejecución
*/
export default function debounce<A = unknown, R = void>(
  func: (args: A) => R,
  delay: number = 1000
): [(args: A) => Promise<R>, () => void] {
  let timer: ReturnType<typeof setTimeout>;

  const debouncedFunc = (args: A): Promise<R> => {
    return new Promise((resolve) => {
      //Si ya existe un timer(llamada previa), cancelamos la ejecución
      if (timer) {
        clearTimeout(timer);
      }
      //Cuando termina el delay ejecutamos la función
      timer = setTimeout(() => {
        resolve(func(args));
      }, delay);
    });
  };
  //Función que cancela la ejecución
  const teardown = () => clearTimeout(timer);

  return [debouncedFunc, teardown];
}
