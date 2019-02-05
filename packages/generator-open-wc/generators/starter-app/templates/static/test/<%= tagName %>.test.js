import { fixture, expect } from '@open-wc/testing';

import '../src/asd-asd';

describe('<asd-asd>', () => {
  it('has a default title property', async () => {
    const el = await fixture('<asd-asd></asd-asd>');
    expect(el.title).to.equal('open-wc');
  });
});
