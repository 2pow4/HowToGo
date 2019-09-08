import App from '../src/jsx/App'
import {} from '../src/jsx/App'
import Search from '../src/jsx/Search'
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword } from '@babel/types';

configure({adapter: new Adapter()});

describe('<App/>', () =>{
    it('it needs to be rendered successfully.', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.length).toBe(1);
    });

    it('it needs to have only Search React Component first', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find(Search).length).toEqual(1)
    });

    it('check handlePlay', ()=>{
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        const videoId = "123"
        expect(wrapper.state('videoId')).toEqual(undefined);
        expect(wrapper.state('playerEnable')).toEqual(false);
        instance.handlePlay(videoId);
        expect(wrapper.state('videoId')).toEqual(videoId);
        expect(wrapper.state('playerEnable')).toEqual(true);
    });

    it('check handleStop', ()=>{
        const wrapper = shallow(<App/>);
        const instance = wrapper.instance();
        instance.handlePlay('123');
        expect(wrapper.state('playerEnable')).toEqual(true);
        instance.handleStop();
        expect(wrapper.state('playerEnable')).toEqual(false);
    });

    it('check keyword value change', ()=>{
        const wrapper = mount(<App/>);
        expect(wrapper.state('keyword')).toEqual('')
        wrapper.find(Search).find('input').simulate('change', {target: {value:"hi"}})
        expect(wrapper.state('keyword')).toEqual('hi')

    })
    
    it('check handleSearch error', ()=>{
        window.alert = jest.fn();
        const wrapper = mount(<App/>);
        expect(wrapper.state('keyword')).toEqual('')
        wrapper.find(Search).find('button').simulate('click')
        
        expect(window.alert).toHaveBeenCalled();
        expect(window.alert).toBeCalledTimes(1);

    })
})

//need to add api call with sinon mocking 