import React, { Component } from 'react'
import '../swiper.scss'
import { throttle, debounce } from '../../../utils'
function ContentItem(props: contentItem) {
  return (
    <div className={'swiper-content-item'}>
      <img src={props.url} alt={props.alt}/>
      <div className={'swiper-content-item-title'}>{props.title}</div>
    </div>
  )
}
type contentItem = {
  url: string,
  key: number | string,
  index?: number,
  alt: string,
  title: string
}
export interface Props {
  readonly currentIndex: number,
  readonly data: contentItem[],
  readonly auto: boolean,
  readonly autoPlayTime: number
}
export interface State {
  data: contentItem[],
  currentIndex: number,
  isFocused: boolean
}
export default class Swiper extends Component<Props, State> {
  private readonly auto: boolean
  private readonly autoPlayTime: number
  private readonly ref: React.RefObject<any>
  private timer: any
  private readonly handleRightClick: any
  private readonly handleLeftClick: any
  // handleRightClick(direction: string):void
  constructor(props: Props) {
    super(props)
    this.auto = props.auto
    this.autoPlayTime = props.autoPlayTime
    this.ref = React.createRef()
    this.timer = null
    this.state = {
      data: props.data,
      currentIndex: props.currentIndex,
      isFocused: false
    }
    this.handleLeftClick = this.changeIndex.bind(this, 'left')
    this.handleRightClick = this.changeIndex.bind(this, 'right')
  }
  changeIndex = (direction: string) => {
    const { currentIndex, data } = this.state
    let node = this.ref.current,
      len = data.length - 1,
      nextIndex: number = -1
    if (direction === 'right') {
      if (currentIndex <= len) {
        nextIndex = currentIndex + 1
        node.style.transition = 'transform 0.6s'
        node.style.transform = `translateX(-${(nextIndex + 1) * 500}px)`
        if (currentIndex === len) {
          nextIndex = 0
          node.addEventListener('transitionend', () => {
            node.style.transition = ''
            node.style.transform = `translateX(-500px)`
          }, { once: true })
        }
      }
    } else {
      if (currentIndex >= 0) {
        nextIndex = currentIndex - 1
        node.style.transition = 'transform 0.6s'
        node.style.transform = `translateX(-${(nextIndex + 1) * 500}px)`
        if (currentIndex === 0) {
          nextIndex = len
          node.style.transition = 'transform 0.6s'
          node.style.transform = `translateX(0px)`
          node.addEventListener('transitionend', () => {
            node.style.transition = ''
            node.style.transform = `translateX(-${(len + 1) * 500}px)`
          }, { once: true })
        }
      }
    }
    this.updateIndex(nextIndex)
  }
  updateIndex = (index: number) => {
    this.setState({
      currentIndex: index
    })
  }
  autoPlayMain = () => {
    this.timer = setInterval(() => {
      this.changeIndex('right')
    }, this.autoPlayTime)
  }
  autoPlay = () => {
    this.autoPlayMain()
  }
  stopAutoPlay = () => {
    clearInterval(this.timer)
  }
  handleMouseEnter = () => {
    this.stopAutoPlay()
    this.setState({
      isFocused: true
    })
  }
  handleMouseLeave = () => {
    if (this.auto) {
      this.autoPlay()
    }
    this.setState({
      isFocused: false
    })
  }
  render() {
    const { data, isFocused } = this.state
    const lastItem = data[data.length - 1]
    const firstItem = data[0]
    return (
      <div className={'swiper'} onMouseEnter={debounce(this.handleMouseEnter, 100)} onMouseLeave={debounce(this.handleMouseLeave, 100)}>
        <div className={'swiper-content'} ref={this.ref}>
          {
            <ContentItem url={lastItem.url} key={'last'} title={lastItem.title} alt={lastItem.alt} />
          }
          {
            data.map(item => <ContentItem url={item.url} key={item.key} title={item.title} alt={item.alt} />)
          }
          {
            <ContentItem url={firstItem.url} key={'first'} title={firstItem.title} alt={firstItem.alt} />
          }
        </div>
        <div className={'swiper-dots'}>
          <div className={'dot'} />
        </div>
        <div className={'swiper-left triangle' + (isFocused ? ' focus-left' : '')} onClick={this.handleLeftClick} />
        <div className={'swiper-right triangle' + (isFocused ? ' focus-right' : '')} onClick={this.handleRightClick} />
      </div>
    )
  }
}
