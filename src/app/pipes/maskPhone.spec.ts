import { maskPhone } from './maskPhone';

describe('maskPhone', () => {
  it('create an instance', () => {
    const pipe = new maskPhone();
    expect(pipe).toBeTruthy();
  });
});
