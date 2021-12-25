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
class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: 'Get Post',
      emitEvent: this.fetch
    }
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click on the button to render posts" tempArr={tempArr} />
          <SharedButton {...configButton} />
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
