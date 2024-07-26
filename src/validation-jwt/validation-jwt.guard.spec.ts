import { ValidationJwtGuard } from './validation-jwt.guard';

describe('ValidationJwtGuard', () => {
  it('should be defined', () => {
    expect(new ValidationJwtGuard()).toBeDefined();
  });
});
