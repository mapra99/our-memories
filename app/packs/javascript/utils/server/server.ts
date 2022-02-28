import { IServer } from './types'

const buildRequest = (url: string, method: string, data: object = {}):Promise<Response> => {
  const request: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (method !== 'GET') {
    const metaElement: HTMLMetaElement = document.querySelector('meta[name="csrf-token"]')
    request.headers['X-CSRF-Token'] = metaElement.content

    request.body = JSON.stringify(data)
  }

  return fetch(url, request)
}

export const server: IServer = {
  get: (url) => buildRequest(url, 'GET'),
  post: (url, data) => buildRequest(url, 'POST', data),
  put: (url, data) => buildRequest(url, 'PUT', data),
  del: (url) => buildRequest(url, 'DELETE'),
}
