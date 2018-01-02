import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUHm4XPCDKBvJijNEF-47nir4QXA84GJo';


//Create a new component , This component should produce some HTML

// const App = function(){
//     return <div>Hi!</div>; //JSXX
// };

// const App = () =>{
//     return <div>Hi!</div>; //JSXX
// };

class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: []};

        // YTSearch({key:API_KEY, term:'surfboards'}, function(data){
        //     this.setState = ({videos:data})
        // });
        //
        // YTSearch({key:API_KEY, term:'surfboards'}, function(videos){
        //     //this.setState = ({videos:videos});
        //     this.setState = ({videos}) //ES6 convention, same as the above statement just shorter
        // });

        YTSearch({key:API_KEY, term:'surfboards'}, (videos) =>{
            //this.setState = ({videos:videos});
            this.setState = ({videos}) //ES6 convention, same as the above statement just shorter
        });
    }
    render(){
        return (
            <div>
                <SearchBar/>
            </div>
        )
    }
}

// const App = () =>{
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//         //<SearchBar/> this is actually a creation of a new "SearchBar"  instance
//     ); //JSXX
// };
//Take this component's generated HTML and put it on the page(in the DOM)
//ReactDOM.render(<App></App>, document.querySelector('.container'));
ReactDOM.render(<App />, document.querySelector('.container'));