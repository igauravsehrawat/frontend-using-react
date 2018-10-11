import makeAPICallAndProceed from './index';

const formDataContentType = 'multipart/form-data';

export const uploadWorkLogReport = (data, callback) => {
  const options = {
    contentType: formDataContentType,
    url: '/worklog-reports',
    method: 'POST',
    data,
    callback,
  };
  return makeAPICallAndProceed(options);
};

export const getPayrollReport = (data, callback) => {
  const options = {
    contentType: null,
    url: '/payroll-reports',
    method: 'GET',
    data,
    callback,
  };
  return makeAPICallAndProceed(options);
};

export const getAllPayrollReport = (data, callback) => {
  const options = {
    contentType: null,
    url: '/payroll-reports/all',
    method: 'GET',
    data,
    callback,
  };
  return makeAPICallAndProceed(options);
};
