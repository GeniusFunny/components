import {Component} from 'react'
import React from 'react'
import Modal from './Modal'
import './modalExample.scss'

class ModalExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.scrollTop = 0
    this.node = React.createRef()
  }
  getScrollTop = () => {
    this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  }
  updatePosition = () => {
    let node = this.node.current
    node.classList.toggle('fixed-scroll')
    node.style.top = -1 * this.scrollTop + 'px'
  }
  recoverPosition = () => {
    let node = this.node.current
    node.classList.toggle('fixed-scroll')
    node.style.top = 0
    document.body.scrollTop = this.scrollTop
    document.documentElement.scrollTop = this.scrollTop
  }
  openModal = () => {
    this.getScrollTop()
    this.setState({
      visible: true
    })
    this.updatePosition()
  }
  confirmEvent = () => {
    this.closeEvent()
  }
  cancelEvent = () => {
    this.closeEvent()
  }
  closeEvent = () => {
    this.recoverPosition()
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div className={'modal-example'} ref={this.node}>
        <div className={'placeholder'}>123</div>
        <button onClick={this.openModal} id={'modal-button'}>Modal</button>
        {this.state.visible ? <Modal
          title={'Modal'}
          content={'这是一个Modal'}
          okText={'OK'}
          cancelText={'Cancel'}
          onOk={this.confirmEvent}
          onCancel={this.cancelEvent}
          onClose={this.closeEvent}
        /> : null}
      </div>
    );
  }
}

export default ModalExample;
