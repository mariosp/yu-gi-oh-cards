import React from 'react'
import {shallow} from 'enzyme';
import CardInfo from '../../components/CardInfo';
import testdata from '../../datastore/testdata'

test('should render CardInfo (main content) with all card details', ()=>{

    const wrapper = shallow(<CardInfo param={testdata[0]} />);
    expect(wrapper).toMatchSnapshot();
    
    
    });