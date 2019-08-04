import React from 'react';
import { Video } from '../component/video';
import './App.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaLoading: true,
      controls:false,
    };
    this.onCanPlay = this.onCanPlay.bind(this);
  }

  onCanPlay = () => {
    this.setState({
      mediaLoading: false,
      controls: true
    })
  }

  render() {
    const { mediaLoading } = this.state;

    return (
      <div
        className="wrapper"
      >
        <Video 
          oncanplay={this.onCanPlay}
          controls={this.state.controls}
        />
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
      </div>
    );
  }

  componentDidMount() {
   
  } 
}
