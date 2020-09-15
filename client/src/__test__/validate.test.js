import { validateCreds } from '../utils/validate';

describe('validateCreds', () => {
  it('returns empty object when credentials are valid', () => {
    const username = 'testname';
    const password = 'testWw@';

    expect(validateCreds(username, password)).toEqual({});
  });

  it('returns object with "password" error key when password is not valid or not provided', () => {
    const username = 'testname';
    const password = 'test';

    expect(validateCreds(username)).toMatchObject({
      password: expect.any(String),
    });

    expect(validateCreds(username, password)).toMatchObject({
      password: expect.any(String),
    });
  });

  it('returns object with "username" error key when username is not valid or empty', () => {
    const password = 'test@Wpassword';
    const username = 'test';

    expect(validateCreds('', password)).toMatchObject({
      username: expect.any(String),
    });
    expect(validateCreds(username, password)).toMatchObject({
      username: expect.any(String),
    });
  });

  it('returns object with "username and password" error keys when values are invalid', () => {
    const password = 'test';
    const username = 'test';

    expect(validateCreds(username, password)).toMatchObject({
      username: expect.any(String),
      password: expect.any(String),
    });
  });
});
