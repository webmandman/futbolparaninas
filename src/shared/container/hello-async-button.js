// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send bola',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHelloAsync(7)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
