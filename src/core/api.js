import fetch from 'isomorphic-fetch';

const BASE_URL = window.API_URL;

function get(path) {
  return fetch(`${BASE_URL}${path}`).then(res => res.json());
}

function post(path, data) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json());
}

export default { get, post };

