export const replaceParam = (url: string, param: string, value: string) => {
  const pattern = new RegExp(`(\/*):${param}(\/*)`);
  const replacement = `$1${value}$2`;

  return url.replace(pattern, replacement);
};
