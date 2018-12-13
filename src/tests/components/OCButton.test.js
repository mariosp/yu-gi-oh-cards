import React from 'react'
import {shallow} from 'enzyme';
import OCButton from '../../components/OCButton';


test('should render OCButton correctly', ()=> {

    const wrapper = shallow(<OCButton />);
    expect(wrapper).toMatchSnapshot(); 

}); 

