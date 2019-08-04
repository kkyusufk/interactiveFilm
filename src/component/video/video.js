import React from 'react';
import ReactDom from 'react-dom';
//import data from '../../config';
import source from '../../utils/fetchSource';
import preload from '../../utils/preloadUtil';
import { Button } from '../button';

export class Video extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      decisionPoint:true
    }
    this.next = null;
    this.videoData = source();
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.decide = this.decide.bind(this);
    this.videoRef = React.createRef();
    this.videoContainer = React.createRef();
  }
  play = () => {
    this.videoRef.current.play();
  }

  pause = () => { 
    this.videoRef.current.pause();
  }

  fullScreen = (event) => {
    this.videoContainer.current.requestFullscreen()
  }
  decide = () => {
    this.setState({
      decisionPoint:true
    })
  }

  render() {
    const { decisionPoint } = this.state;
    return(
      <React.Fragment>
       <div ref={this.videoContainer} className="videoContainer">
       <div className="controls">
          <button onClick={this.play}>Play</button>
          <button onClick={this.fullScreen}>fullscreen</button>      
          <button onClick={this.pause}>Pause</button>
        </div>
        <video
          autoPlay
          id = "videoElement"
          ref = {this.videoRef}
          className = "videoContainer"
          //controls={this.props.controls}
          src={this.videoData.src}
          width="100%"
          onCanPlay={this.props.oncanplay}
          onEnded={this.decide}
         />
        {
          decisionPoint ?
          <Button 
            video={this.videoData}
          />
          :
          null
        }
       </div>
      </React.Fragment>
    )
  }
  componentDidMount(){
    this.next = preload();
    console.log(this.next);
    console.log(this.videoRef);
  }
}

