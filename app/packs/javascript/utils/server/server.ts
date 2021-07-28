import { IServer } from './types'

const buildRequest = (url: string, method: string, data: object = {}):Promise<Response> => {
  const metaElement: HTMLMetaElement = document.querySelector('meta[name="csrf-token"]')

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': metaElement.content
    },
    body: JSON.stringify(data)
  })
}

export const server: IServer = {
  get: (url) => buildRequest(url, 'GET'),
  post: (url, data) => buildRequest(url, 'POST', data),
  put: (url, data) => buildRequest(url, 'PUT', data),
  delete: (url) => buildRequest(url, 'DELETE'),
}
