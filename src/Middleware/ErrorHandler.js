// 4XX status code related to client side error
// 5XX status code related to server side error
const getErrorStatus = require('../Constant/ErrorsDataList');

function findErrorMessage(status) {
	return getErrorStatus.ERROR_STATUS_ARRAY.find(v => v.status == status).message || { error: 'There must be an error' };
}

/**
		* Error Reposnse.
		* @param {Response} res - Send error response
		* @param {number} statusCode - Error Status Code
	*/
let errorResponse = (statusCode) => {
	return findErrorMessage(statusCode);
}


module.exports = {
	errorResponse,
};