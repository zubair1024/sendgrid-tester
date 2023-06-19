import { userSchema } from './validationSchema';

describe('User Schema Validation', () => {
  it('should pass validation for a valid user', () => {
    const validUser = {
      id: 'e36368fd-2d0a-4d39-9456-54ce2c3841d1',
      name: 'John Doe',
      age: 25,
      email: 'johndoe@example.com',
    };

    expect(() => userSchema.parse(validUser)).not.toThrow();
  });

  it('should throw an error for an invalid user', () => {
    const invalidUser = {
      id: '123',
      name: '',
      age: -5,
      email: 'invalid-email',
    };

    expect(() => userSchema.parse(invalidUser)).toThrow();
  });
});
