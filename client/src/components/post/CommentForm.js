import React, { Component } from "react";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment } from "../../actions/postActions";

class CommentForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.errors !== nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
    return null;
  }

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { postId } = this.props;
    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({
      text: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Make a comment...
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  name="text"
                  placeholder="Reply to post"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
