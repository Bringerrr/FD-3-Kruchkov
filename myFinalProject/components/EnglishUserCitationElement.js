import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { dic_add } from "../redux/reduxConst";
import { dic_store } from "../redux/reduxConst";

import './EnglishUserCitationElement.css';

const translate = require('ya-translate')("trnsl.1.1.20180821T152745Z.b203b1adaafdf5b6.21dce1350e91a9fb665fcb98a6d203c7a05f407d")

class EnglishUserCitationElement extends React.PureComponent {

    state = {
        workMode:1,
        currCit:null,
        wordsSelected:[],
      };

    wordSelect = (EO) =>{
        let textOld = EO.target.innerHTML
        let text = textOld.replace(/[/.,!?;]*/g, '');
        this.translateText(text);
        let newWord = this.state.wordsSelected;
        newWord.push(text);
        this.setState({wordsSelected:newWord});
        EO.target.style.backgroundColor = "green"
    }

    dicAdd = (EO) => {
        let elem = EO.target.parentNode.getElementsByClassName("UserCitationText")[0];
        let text = elem.innerHTML;
        this.props.dispatch( dic_add(elem,text) );
        let wordArr = this.props.dic.text.split(" ")
        let htmlWords = wordArr.map(e => 
            <span className="UserCitationText_Word" onClick={(EO)=>{ this.wordSelect(EO) } }>{e} </span>
        );
        this.setState({workMode:2});
        this.setState({currCit:htmlWords});
        EO.target.parentNode.style.backgroundColor="yellow"
    }

    dicStore = (EO) =>{
        this.props.dispatch( dic_store(this.state.wordsSelected) );
        this.dicComplete();
        EO.target.parentNode.parentNode.style.backgroundColor=""
    }

    dicComplete = () =>{
        this.setState({workMode:1})
        this.setState({wordsSelected:[]})
    }

    translateText =(word)=>{
        translate(word, 'ru').then(text => {
            console.log(text.text); 
            return text.text;
        });
    }
    
    render(){

        console.log("EnglishUserCitationElement id=" +this.props.id+" render")

        return(
            <div className="UserCitationContainerElem">
                <div key={this.props.id}><h4>{this.props.title}</h4>
                    {this.state.workMode ==1
                    ?<span className="UserCitationText">
                        {this.props.text}
                    </span>
                    :<div>{this.state.currCit}</div>
                    }
                </div>

                {this.state.workMode ==1
                    ?<button onClick={this.dicAdd}>Режим Добавления</button>
                    :<div><button onClick={this.dicStore}>Добавить</button>
                        <span className="UCT_Text">нажмите на слово...</span>
                    </div>
                }

            </div>
        )
    }

}   
    
function mapStateToProps (state) {
    return{
      dic: state.dic
    };
  }
  
  
  export default connect (
    mapStateToProps
  )(EnglishUserCitationElement);