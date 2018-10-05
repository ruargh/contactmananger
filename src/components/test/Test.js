import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };
  componentDidMount() {
    console.log('component did mount');
  }
  componentWillMount() {
    console.log('component will mount');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  componentWillUpdate() {
    console.log('component will update');
  }
  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log('component will receive props');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
