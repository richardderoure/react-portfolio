import React from 'react';
import { shallow } from 'enzyme';
import Portfolio from '../components/portfolio';

describe('Portfolio', () =>{
  let wrapper;

  beforeEach(() => wrapper = shallow(<Portfolio />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

})