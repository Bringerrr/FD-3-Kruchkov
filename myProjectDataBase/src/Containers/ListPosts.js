import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getUserData, savePost, deletePost, addPost, addCitation, cancelAddCitation } from '../Actions/PostActions';
import { Field, reduxForm, reset } from 'redux-form';
import '../Styles/App.css';
import _ from 'lodash';
import PostCard from '../Components/PostCard';
import { getUser, logout } from '../Actions/UserActions';
import { userDataRef } from '../Firebase'


class App extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getUser();
    this.props.getUserData();
    if (this.props.user.loading === false && this.props.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.user.loading === false && nextProps.user.email === undefined) {
      this.props.history.replace('/Login');
    }
  }

  getUserInfo(){
    console.log(this.props.userInfo)
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key} id={post.id} purchased={_.includes(this.props.userInfo, post.id)} 
        email={this.props.user.email} userInfo={this.props.userInfo}>
          <h3 className="card-title">
            {post.title}
          </h3>
          <p className="card-text">
            {post.body}
          </p>
          <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Delete</button>
          <button className="btn btn-danger float-right" onClick={() => this.props.deletePost(key)}>Edit</button>
          <button className="btn btn-danger float-right" onClick={() => this.props.addPost(this.props.user.email,this.props.other.idIsAdded)}>Add</button>

        </PostCard>
      );
    });
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class}/>
    );
  }
  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.userInfo)
    this.getUserInfo();
    return (
      <div>
        <div className="navbar">
          <button className="btn btn-danger" onClick={() => {this.props.logout();}}>Sign out</button>
          {/* <div onClick={()=>{this.props.history.replace('/UserCitation')}}>Ваши цитаты</div> */}

          <a href="./UserCitation"/>
        </div>

        <div className="container">
          <div className="main">
            {this.renderPosts()}
          </div>
          <div className="navbar fixed-bottom">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="footerForm">
              <Field
                name="title"
                component={this.renderField}
                label="Title"
                class="footer-title"
              />
              <Field
                name="body"
                component={this.renderField}
                label="Body"
                class="footer-body"
              />
              <button type="submit" className="btn footer-button">Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect((state, ownProps) => ({
    posts: state.posts,
    user: state.user,
    other: state.other,
    userInfo: state.userInfo
  }), { savePost, getPosts, deletePost, addPost, getUser, getUserData, addCitation, logout }
)(form);

export default form;