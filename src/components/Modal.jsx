import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import './modal.scss'

export default class Modal extends Component {
  static defaultProps = {}
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.node = React.createRef()
  }
  render() {
    const {title, content, okText, cancelText, onOk, onCancel, onClose} = this.props
    return ReactDom.createPortal(
      <div className={'modal-wrapper'} ref={this.node}>
        <section className={'modal'}>
          <h2 className={'modal-title'}>{title}</h2>
          <main className={'modal-content'}>{content}</main>
          <div className={'modal-operator'}>
            <button className={'modal-operator-confirm'} onClick={onOk}>{okText}</button>
            <button className={'modal-operator-cancel'} onClick={onCancel}>{cancelText}</button>
          </div>
        </section>
        <div className={'mask'} onClick={onClose}/>
      </div>, document.body
    )
  }
}
