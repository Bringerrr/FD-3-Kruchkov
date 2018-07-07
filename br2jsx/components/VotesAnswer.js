import React from 'react';
import ReactDOM from 'react-dom';

class VotesAnswer extends React.Component {

    render(){

        var newArr= []
        this.props.text.split("</br>").forEach( (e,i) => {
            newArr.push(e)
            if(i==this.props.text.split("</br>").length-1 ){}
            else newArr.push(<br/>)
        });

        return(
            <div>
                <span>{this.props.title}</span> 
                <br/>
                <br/>
                <span>{newArr}</span>
            </div>
        )
    }

}

export default VotesAnswer;