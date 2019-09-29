import React from 'react';
import Calendar from 'react-calendar';
import AutoSuggest from 'react-autosuggest';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // AutoSuggetion state
            departure: 'Departure',
            destination: 'Destination',

            Suggestions:[],

            // Calendar state
            date: new Date(),
        }
    }

    handleSubmit = (event) => {
        console.log("submit!")
    }
    // Calendar component callback function
    onDateChange = date => this.setState({ date });
    
    // AutoSuggest component callback function
    // TODO: Make function below
    onSuggestionFetchRequested = () =>{}

    onSuggestionClearRequested = () =>{}

    onSuggestionFetchRequested = () =>{}

    getSuggestionValue = () => {}

    renderSuggestion = () => {}

    //Consider for the Suggestion logic and data object 
    onInputChange = (event, { newValue }) =>{
        this.setState({
            value: newValue
        });
    };

    render(){
        const { destination, departure, suggestions } = this.state;
        const destSuggestionInputProps = {
            placeholder: '지역명',
            value: destination, 
            onChange: this.onInputChange
        }
        const departSuggestionInputProps = {
            placeholder: '지역명',
            value: departure,
            onChange: this.onInputChange
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* departure destination part */}
                    <AutoSuggest 
                        suggestions={suggestions}
                        onSuggetionsFetchRequested={this.onSuggetionsFetchRequested}
                        onSuggetionsClearRequested={this.onSuggestionClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps = {departSuggestionInputProps}
                    />
                    <AutoSuggest
                        suggestions={suggestions}
                        onSuggetionsFetchRequested={this.onSuggetionsFetchRequested}
                        onSuggetionsClearRequested={this.onSuggestionClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        inputProps = {destSuggestionInputProps}
                    />
                    <div>
                        <button onClick>
                        </button>
                        {/* date part */}
                        <Calendar onChange={this.onDateChange}
                                  value={this.state.date}/>
                    </div>
                    <div>
                        <button>    
            
                        </button>
                            <input type="text"/>
                        <button></button>
                    </div>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }

}

export default SearchBar;