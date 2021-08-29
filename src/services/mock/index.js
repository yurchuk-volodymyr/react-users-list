import { createServer } from "miragejs"

export function makeServer() {
  let server = createServer({
    routes() {
			this.urlPrefix = process.env.REACT_APP_API_GATEWAY_URL;

      this.delete("/remove-user/:id", (schema, request) => {
				return 'ok'
      })

			this.passthrough(`https://randomuser.me/**`);
    },
  })

  return server
}