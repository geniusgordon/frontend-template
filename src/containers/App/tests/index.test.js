/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from '../index';
import style from '../style.css';

describe('<App />', () => {
  it('should render App title and message', () => {
    const wrapper = shallow(<App message="123" />);
    expect(wrapper.find(`.${style.appTitle}`).at(0).text()).to.equal('App');
    expect(wrapper.find(`.${style.appMessage}`).at(0).text()).to.equal('123');
  });

  it('should render it\'s children', () => {
    const children = <div>Test</div>;
    const wrapper = shallow(<App>{children}</App>);
    expect(wrapper.contains(children)).to.equal(true);
  });
});

