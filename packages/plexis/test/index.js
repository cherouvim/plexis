import * as plexis from '../src/index';

describe('plexis', () => {
  it('allows using all the available utilities', () => {
    expect(Object.keys(plexis)).toMatchSnapshot();
  });
});
