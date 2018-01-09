import _ from 'lodash';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';

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
        this.state = {
            videos: [],
            selectedVideo: null
        };
        console.log("state is : " + this.state.videos);

        this.videoSearch('surfboards');

        // YTSearch({key:API_KEY, term:'surfboards'}, function(data){
        //     this.setState = ({videos:data})
        // });
        //
        // YTSearch({key:API_KEY, term:'surfboards'}, function(videos){
        //     //this.setState = ({videos:videos});
        //     this.setState = ({videos}) //ES6 convention, same as the above statement just shorter
        // });


    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term:term}, (videos) =>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            },function(){
                console.log("PASS");
            });

            //this.setState = ({videos}) //ES 6 convention, same as the above statement just shorter
        });
    }
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        console.log('rendered');
        console.log(this.state.videos);
        return ( //passing data like this is : is refered to as passing props in react. videos is reffered as prop.
            // we passing prop videos to VideoList.anytime that App rerenders (when we do setState for example), VideoList
            //will get the new list of videos
            //when we use functional component the props OBJECT will arrive as an argument
            // in a class based component , props are available anywhere , in any method we define as "this.props"

            // <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
            //We pass down the function 'videoSearch' to the 'SearchBar' under the property 'onSearchTermChange'
            //onSearchTerm is actually a function that takes a new 'search term' and calls 'this.videoSearch' and passed him the 'term'

            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} // a function definition , it takes a video (selectedVideo) and defines (UPDATES) it on App state
                    // we pass this as a property into VideoList
                    videos={this.state.videos} />
            </div>
        );
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