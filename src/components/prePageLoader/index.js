import React, { Component } from "react";

export default class PrePageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="preloader">
            <div className="preloader__inner">
              <div className="preloader__box"></div>
            </div>
          </div>
        ) : (
          <div>{this.props.children}</div>
        )}
      </>
    );
  }
}