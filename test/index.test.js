import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../src/components/Home';

describe('<Home />', () => {
  it('Has two classes with name of home', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(".home")).to.have.length(2);
  });
});
