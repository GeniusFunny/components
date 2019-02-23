import React, {Component} from 'react'
import './swiper.scss'
function ContentItem(props) {
  return (
    <div className={'swiper-content-item'}>
      <img src={props.url} alt={props.alt} className={''}/>
      <div className={'swiper-content-item-title'}>{props.title}</div>
    </div>
  )
}
export default class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      currentIndex: props.currentIndex
    }
    this.ref = React.createRef()
    this.handleLeftClick = this.changeIndex.bind(this, 'left')
    this.handleRightClick = this.changeIndex.bind(this, 'right')
  }
  changeIndex = (direction) => {
    const {currentIndex, data} = this.state
    let node = this.ref.current,
      len = data.length - 1,
      nextIndex
    if (direction === 'right') {
      if (currentIndex < len) {
        nextIndex = currentIndex + 1
        node.style.transform = `translateX(-${nextIndex * 500}px)`
      } else {
        nextIndex = 0
        node.style.transform = `translateX(0px)`
      }
    } else {
      if (currentIndex > 0) {
        nextIndex = currentIndex - 1
        node.style.transform = `translateX(-${nextIndex * 500}px)`
      } else {
        nextIndex = len
        node.style.transform = `translateX(-${nextIndex * 500}px)`
      }
    }
    this.updateIndex(nextIndex)
  }
  updateIndex = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  render() {
    const {data}  = this.state
    return (
      <div className={'swiper'}>
        <div className={'swiper-content'} ref={this.ref}>
          {
            data.map(item => <ContentItem url={item.url} key={item.key} title={item.title} alt={item.alt}/>)
          }
        </div>
        <div className={'swiper-dots'}>
          <div className={'dot'}/>
        </div>
        <div className={'swiper-left triangle'} onClick={this.handleLeftClick}/>
        <div className={'swiper-right triangle'} onClick={this.handleRightClick}/>
      </div>
    )
  }
}
