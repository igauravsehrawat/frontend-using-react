import axios from 'axios';
import { BASE_URL } from '../constants';
import { showErrorMessage, showSuccessMessage } from '../utils';

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

/**
 * @param {Object} options Options for making the request
 * @param {String} options.contentType content type of payload
 * @param {String} options.url url to make request to
 * @param {String} options.method method of the request
 * @param {Object} options.data data to pass in the request
 * @param {Function} options.callback callback to be executed on finishing request
 */

const makeAPICallAndProceed = ({
  contentType, url, method, data, callback,
}) => {
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
      showSuccessMessage(response.data.message);
      callback(false, response.data);
    })
    .catch((error) => {
      if (error && error.response && error.response.data && error.response.data.message) {
        showErrorMessage(error.response.data.message);
        callback(true, error.response.data.message);
      }
    });
};

export default makeAPICallAndProceed;
