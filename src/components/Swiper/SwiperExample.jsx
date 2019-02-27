import React from 'react'
import Swiper from './Swiper'

export default function SwiperExample() {
  const data = [
    {
      title: 'Test0',
      url: 'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=36aa51157b094b36c4921ded93cd7c00/810a19d8bc3eb13534fd1871ab1ea8d3fc1f44c5.jpg',
      alt: 'Test0',
      key: 0,
      index: 0
    },
    {
      title: 'Test1',
      url: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=1a74a98dd7b44aed464eb8e4831d876a/bf096b63f6246b60905f18b3e6f81a4c500fa2a0.jpg',
      alt: 'Test1',
      key: 1,
      index: 1
    },
    {
      title: 'Test2',
      url: 'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5c0b85bd6281800a71e58f0e813533d6/d50735fae6cd7b89130246b1012442a7d9330e91.jpg',
      alt: 'Test2',
      key: 2,
      index: 2
    },
    {
      title: 'Test3',
      url: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4e7e3a7a8d0a19d8d403820503f882c9/34fae6cd7b899e518d7259df4fa7d933c9950d78.jpg',
      alt: 'Test3',
      key: 3,
      index: 3
    },
    {
      title: 'Test4',
      url: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=47541133dcc8a786a12a4c0e5708c9c7/5bafa40f4bfbfbedc92f87b675f0f736aec31f80.jpg',
      alt: 'Test4',
      key: 4,
      index: 4
    },
    {
      title: 'Test5',
      url: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=278c90f4cdcec3fd943ea175e689d4b6/1f178a82b9014a90689d2b85a7773912b31bee63.jpg',
      alt: 'Test5',
      key: 5,
      index: 5
    }
  ]
  return <Swiper currentIndex={0} data={data} auto={true} autoPlayTime={3000}/>
}
