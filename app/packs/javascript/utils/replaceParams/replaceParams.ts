import { replaceParam } from './replaceParam';

export const replaceParams = (url: string, params: object) => {
  let mappedUrl = url;

  Object.keys(params).forEach((key) => {
    mappedUrl = replaceParam(mappedUrl, key, params[key]);
  });

  return mappedUrl;
};
