function validateCreds(username, password) {
  const errors = {};

  const nam = /^.{6,}$/;
  const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^*()_+}{&:'?;.,|<>]).{6,}$/;

  if (!nam.test(username)) {
    errors.username = 'Min length at least 6 symbols';
  }
  if (!pass.test(password)) {
    errors.password =
      'Min length at least 6 symbols, A-z letters and special symbol - _, & etc.';
  }
  return errors;
}

export { validateCreds };
