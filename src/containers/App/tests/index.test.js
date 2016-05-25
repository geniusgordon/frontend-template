/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from '../index';

describe('<App />', () => {
  it('should render App title and message', () => {
    const wrapper = shallow(<App message="123" />);
    expect(wrapper.html()).to.equal('<div><div>App</div><div>123</div></div>');
  });
});

