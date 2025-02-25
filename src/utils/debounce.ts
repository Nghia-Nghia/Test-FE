type DebouncedFunction<F extends (...args: any[]) => any> = (
  ...args: Parameters<F>
) => Promise<ReturnType<F>>;

export function debounce<F extends (...args: any[]) => any>(
  func: F,
  delay: number
): DebouncedFunction<F> {
  let timeoutId: ReturnType<typeof setTimeout>;

  return async function (this: any, ...args: Parameters<F>) {
    clearTimeout(timeoutId);

    return new Promise<ReturnType<F>>((resolve) => {
      timeoutId = setTimeout(async () => {
        const result = await func.apply(this, args);
        resolve(result);
      }, delay);
    });
  };
}
