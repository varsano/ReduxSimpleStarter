import React, { Component } from 'react';
// { Component } - import react and pull of the property component as a variable called component

//const Component = React.Component; //This is equivalent to import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input /> //We need to import React because this line will be translated to : React.createElement
// };

//define a new class called SearchBar and give it access to all of the functionality that React.Component has
//class SearchBar extends React.Component {
class SearchBar extends Component { // -> equivalent to class SearchBar extends React.Component {

//When we use class based method We still have to give it the ability to render itself somehow (return jsx), to do so we define
//a method on the class that called render method . every react component that we create that is a class based
// have to have a render method
//whenever our app component tries to render SearchBar instead of just calling a normal function it will call the render function
//every render function must return jsxx

    //This is the way to initialize a state in a class based component, remember functional component do not have state
    // All JS classes have a special function called Constructor function, the constructor function is the first and only
    //function that called automatically whenever a new instance of the class is created
    constructor(props) {
        super(props); // since we extend Component (that also has a Constructor function)

        this.state = { term: '' }
    }

    render (){
        //return <input onChange={this.onInputChange}/>;


        /*
        return <input onChange={(event) => console.log(event.target.value)}/>; //this is an arrow function, the same outcome as the row above
        return <input onChange={event => console.log(event.target.value)}/>; // we can remove the leading parentecis since we have only 1 argument
        return <input onChange={event => this.setState({term:event.target.value})}/>;
        */



        // return (
        //     <div>
        //         <input onChange={event => this.setState({term:event.target.value})}/>
        //         Value of the input : {this.state.term}
        //     </div>
        // )

        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )


        // and also because its a single line we can ommit the carly braclets
    }

    onInputChange (term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    // onInputChange (event) { // the "event" object describes the context or information about the event that occured
    //     console.log(event.target.value);
    // }


}
export default SearchBar;