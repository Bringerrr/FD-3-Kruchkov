import React from 'react';
import { connect } from 'react-redux';
import { addCitation, cancelAddCitation, addPost } from '../Actions/PostActions';
import _ from 'lodash';

class PostCard extends React.Component {

  state = {
    purch:this.props.purchased,
  }

  // componentWillMount(){
  //   this.setState({purch:(_.includes(this.props.userInfo, this.props.id))})
  //   console.log(this.props.userInfo)
  //   console.log((_.includes(this.props.userInfo, this.props.id)))
  // }


  render() {
    return (
      <div className="card post">
        <div className="card-block">
          {this.props.children}
        </div>
        {this.state.purch===false
          ?<button className="btn btn-danger float-right" onClick={() => { 
              this.props.addCitation(this.props.id)
              this.props.addPost(this.props.email,this.props.other.idIsAdded)
              console.log(this.props.other.idIsAdded) 
              {_.includes(this.props.other.idIsAdded, this.props.id) === true 
              ?this.setState({purch:true})
              :null}
            } 
            }>AddRedux</button>
          :<button className="btn btn-danger float-right" onClick={() => {
            this.props.cancelAddCitation(this.props.id)
            this.props.addPost(this.props.email,this.props.other.idIsAdded)
            console.log(this.props.other.idIsAdded)
            this.setState({purch:false})} }>
          Cancel</button>
            
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return{
    other: state.other,
  };
}

export default connect (
  mapStateToProps,
  { addCitation, cancelAddCitation, addPost }
  // matchDispatchToProps
)(PostCard);