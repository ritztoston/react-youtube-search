import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return (
            <div className="search-bar">
                {/*<input onChange={userInput => this.setState({term: userInput.target.value})}/>*/}
                <input onChange={userInput => this.onInputChange(userInput.target.value)}/>
            </div>);
    }
}

export default SearchBar;