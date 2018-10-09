import makeAPICallAndProceed from './index';

const formData = 'multipart/form-data';

export const uploadWorkLogReport = (data, callback) => makeAPICallAndProceed(formData, '/worklog-reports', 'POST', data, callback);

export const getPayrollReport = (data, callback) => makeAPICallAndProceed(null, '/payroll-reports', 'GET', data, callback);
