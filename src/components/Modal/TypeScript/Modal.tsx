import React, {Component} from 'react'
import ReactDom from 'react-dom'

export interface Props {
  readonly title?: string,
  readonly content?: string,
  readonly okText?: string,
  readonly cancelText?: string,
  onOk(event: React.MouseEvent<HTMLButtonElement>): void,
  onCancel(event: React.MouseEvent<HTMLButtonElement>): void,
  onClose(event: React.MouseEvent<HTMLDivElement>): void
}
export default class Modal extends Component<Props, {}> {
  private readonly node: React.RefObject<any>
  constructor(props: Props) {
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
