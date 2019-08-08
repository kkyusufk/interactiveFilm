import React from 'react';
import './App.css';
import Video from '../components/video';
import Sources from '../utils/srcUtils';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaLoading: true,
    };
  }
  render() {
    const { mediaLoading } = this.state;

    return (
      <div
        className="wrapper"
      >
        {
          mediaLoading ?
          <div
            className="loaderWrapper"
          >
            <img
              className='loader'
              src="./src/loader.gif"
            />
          </div>
          :
          null
        }
        <Video />
      </div>
    );
  }

 componentDidMount() { 
    var src = new Sources();
    src._fetchSource()
    console.log(src.Source);
  }
}
