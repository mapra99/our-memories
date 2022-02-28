export interface IServer {
  get: (url: string) => Promise<Response>,
  post: (url: string, data: object) => Promise<Response>,
  put: (url: string, data?: object) => Promise<Response>,
  del: (url: string) => Promise<Response>,
}
