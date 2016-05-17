import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('should render <div>App</div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).to.equal('<div>App</div>');
  });
});

