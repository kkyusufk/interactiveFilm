import React from 'react';
import source from '../utils/fetchSource';
import preload from '../utils/preloadUtil';

export class Button extends React.Component {
    constructor(props){
        super(props);
        this.decisionPoint = this.decisionPoint.bind(this);
        console.log(this.props)
        this.next = preload(this.props.id);
    }

    decisionPoint = (event) => {
        console.log(this.next)
    }

    render(){
        return(
            <div className="decisionButton">
                <button  onClick={this.decisionPoint}>Point A</button>
                <button>JELLO</button>
            </div>

        )
    }
}