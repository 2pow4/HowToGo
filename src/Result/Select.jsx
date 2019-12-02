import React from 'react';
import Select from 'react-select';

const options = [
    {value: 'departure_time', label: '출발시간'},
    {value: 'needed_time', label: '소요시간'},
    {value: 'cost', label: '비용'}
];

const customStyles = {
    option: (base, state) => ({
        ...base,
        width: 150,
        background: state.isSelected ? "#bdabff": "white",
        "&:hover": {
            background: "#e6dfff"
        }
    }),
    control: (base, state) => ({
        ...base,
        width: 150,
        background: "transparent",
        border: state.isFocused ? 0 : 0,
        boxShadow: state.isFocused ? 0 : 0,
        "&:hover": {
            border: state.isFocused ? 0 : 0
        }
    }),
    menu: (base, state) => ({
        ...base,
        width: 150
    })
}

class SortedBy extends React.Component {

    state={
        selectedOption: options[0]
    }

    handleChange = (selectedOption) => {
        this.setState({
            selectedOption
        }, ()=> console.log(`Option selected: `, this.state.selectedOption))
    }

    render(){
        let {selectedOption} = this.state;

        return(
            <Select
                onChange={this.handleChange}
                value={selectedOption}
                options={options}
                styles={customStyles}
            />
        )
    }
}

export default SortedBy;