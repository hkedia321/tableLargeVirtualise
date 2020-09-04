import fetch from 'isomorphic-fetch';

const api = ( url, method = 'GET' ) => {

  return fetch( url, { method: method } )
    .then( response => {
      if ( !response.ok ) {
        throw response; // Send "bad" response to catch()
      } else {
        return response.json(); 
      }
    })
    .then( response => {
      return { ...response, ...{ ok: true } };
    })
    .catch( response => {
      return { ...response, ...{ ok: false } };
    });

};

export default api;