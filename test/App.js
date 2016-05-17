import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('should render <div>App</div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<div>App</div>)).to.be.true;
  });
});

