import React, {Component} from 'react';
import TextFields from './TextFields';
import './Blog.css';
import firebase from './firebase';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
    this.addBlog = this.addBlog.bind(this);
  }

  retrieveBlogs = () => {
    const blogsRef = firebase.database().ref('blog-items');
    blogsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push(items[item]);
      }
      this.setState({
        blogs: newState.reverse()
      });
    });
  };

  componentDidMount() {
    this.retrieveBlogs();
  }

  addBlog = (name, blog) => {
    const blogItems = firebase.database().ref('blog-items');
    const item = {
      name: name,
      date: new Date().toLocaleString(),
      text: blog
    };
    blogItems.push(item);
  };

  render() {

    const listBlogs = this.state.blogs.map((blog) =>
      <div id={"blog-field"}>
        <p>{blog.date}</p>
        <h4>{blog.name+ ":"}</h4>
        <p>{blog.text}</p>
      </div>
    );

    return (
      <div className="blog">
        <div className={"input"}>
          Write new post here:
          <TextFields addBlog={this.addBlog} />
        </div>
        <div className={"history"}>
          <div>Previous Posts:</div>
          <div id={"list"}>{listBlogs}</div>
        </div>
      </div>

    );
  }
}

export default Blog;