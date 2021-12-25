import Header from "./components/header";
import './app.scss';
import Headline from "./components/headline";
import SharedButton from './components/button';
import ListItem from "./components/listItem";
import { connect } from 'react-redux';
import { fetchPosts } from "./actions";
import { Component } from "react";

const tempArr = [{
  fName: 'Job',
  lName: 'Bloggs',
  email: 'job@gmail.com',
  age: 40,
  onLineStatus: true
}]

const initialState = {
  hideBtn: false
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: 'Get Post',
      emitEvent: this.fetch
    }
    return (
      <div className="App" data-test="AppComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click on the button to render posts" tempArr={tempArr} />
          {!hideBtn && <SharedButton {...configButton} />}
          {
            posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return (
                <ListItem key={index} {...configListItem} />
              )
            })
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
