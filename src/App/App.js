import React from 'react';
import { Video } from '../component/video';
import './App.css';
import { videoLoader } from '../utils/videoLoader';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaLoading: true,
    };
    this.video;
    this.src;
    this.display = this.display.bind(this);
  }

    async componentWillMount() {
      const lol = await videoLoader("./src/media/withAudio/scen_1.mp4");
      console.log(lol);
    }

  display = () => {
    this.setState({
      mediaLoading:false
    })
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
      </div>
    );
  }

 componentDidMount() { 
    this.setState({
      mediaLoading:false
    })
  }
}
