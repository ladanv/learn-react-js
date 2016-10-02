import React from 'react';

const Hello = (props) => <div>Hello, {props.name}</div>;
Hello.propTypes = {
  name: React.PropTypes.string
}
Hello.defaultProps = {
  name: 'John Doe'
}

export default Hello;