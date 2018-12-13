import React from 'react'
import {shallow} from 'enzyme';
import CardItem from '../../components/CardItem';
import testdata from '../../datastore/testdata'


test('should render CardItem (sidebar box) with card name and card_type', ()=>{

    const wrapper = shallow(<CardItem name={testdata[0].name} type={testdata[0].card_type} />);
    expect(wrapper).toMatchSnapshot();
    
    
    });






