import React from 'react';
import { source } from '../../utils/fetchSource';
import { videoLoder } from '../../utils/videoLoader';

export class Video extends React.Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  render(){ 
    return(
    <video
      controls
      className="videoElement"
      autoPlay
      width="100%"
      onCanPlayThrough = {this.props.display}
    />
    )
  }
} 

