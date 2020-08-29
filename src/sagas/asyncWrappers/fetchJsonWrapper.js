import fetch from 'isomorphic-fetch'; // Also provides a polyfill for fetch in IE11

export const fetchJsonWrapper = ( url, method = 'GET' ) => {

  return fetch( url, { method: method } )
    .then( response => {
      if ( !response.ok ) {
        throw response; // Send "bad" response to catch()
      } else {
        return response.json(); // Send "good" response to following then()
      }
    })
    .then( response => {
      return { ...response, ...{ ok: true } };
    })
    .catch( response => {
      return { ...response, ...{ ok: false } };
    });

};