import axios from 'axios';
import { BASE_URL } from '../constants';
import { showErrorMessage } from '../utils';

const methodTypes = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
  put: 'PUT',
  patch: 'PATCH',
};

const constructHeaders = (contentType) => {
  const headers = { 'Content-Type': contentType };
  return headers;
};

export default function makeAPICallAndProceed({
  contentType, url, method, data, callback,
}) {
  axios({
    method,
    params: method === methodTypes.get ? data : {},
    data: method === methodTypes.post ? data : {},
    url,
    baseURL: BASE_URL,
    headers: constructHeaders(contentType),
    validateStatus(status) {
      return ((status >= 200 && status < 300) || status === 412);
    },
  })
    .then((response) => {
      callback(false, response.data);
    })
    .catch((error) => {
      if (error && error.response && error.response.data && error.response.data.message) {
        showErrorMessage(error.response.data.message);
        callback(true, error.response.data.message);
      }
    });
}
