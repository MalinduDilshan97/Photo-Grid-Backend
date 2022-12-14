export default {
  defaultServerResponse: {
    status: 400,
    message: '',
    body: {},
  },
  requestValidationMessage: {
    BAD_REQUEST: 'Invalid fields',
    TOKEN_MISSING: 'Token missing from header',
    FORBIDDEN: 'Forbidden',
  },
  databaseMessage: {
    INVALID_ID: 'Invalid Id',
  },
  serverMessage: {
    SERVERERROR: 'Something Went Wrong : Service -',
  },
};
