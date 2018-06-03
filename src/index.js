import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videolist';
import SearchBar from './components/searchbar';
import VideoDetail from './components/videodetail';

const API = 'AIzaSyAccFkSNU4CNPKfq7F6T_L5Exas4MN0yZY';

/*const App =  () => {
    return <div>
        <SearchBar/>
    </div>;
};*/

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term){
        YTSearch({key: API, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'));