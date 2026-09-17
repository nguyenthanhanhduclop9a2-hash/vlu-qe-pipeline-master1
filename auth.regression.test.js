const login = require('./auth');

describe('Regression Test Suite', () => {
  test('sai mật khẩu → false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('username rỗng → false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('password rỗng → false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('mật khẩu chứa ký tự đặc biệt sai → false', () => {
    expect(login('admin', '123@#$')).toBe(false);
  });

  test('username không tồn tại → false', () => {
    expect(login('hacker', '123')).toBe(false);
  });

  test('đăng nhập đúng vẫn phải true (bảo đảm không hỏng)', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
