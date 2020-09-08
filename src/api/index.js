import fetch from "isomorphic-fetch"

const api = (url, method = "GET") =>
  fetch(url, { method })
    .then((response) => {
      if (!response.ok) {
        throw response // Send "bad" response to catch()
      } else {
        return response.json()
      }
    })
    .then((response) => ({ ...response, ...{ ok: true } }))
    .catch((response) => ({ ...response, ...{ ok: false } }))

export default api
