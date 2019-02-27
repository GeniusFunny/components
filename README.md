## Components

一些可用性为零，可维护性为负，灰常耗性能的React组件。

### 基础设施篇

#### Todo

1. 集成React-Router （2.18 ✅）
2. 试试TypeScript？（2.19 ✅）

### 组件篇

#### 2.17 Modal

Modal组件，见Modal.jsx、Modal.scss；测试组件：ModalExample.jsx

**注意**：

1. 伪元素法**增大可点击区域**。ps：这种方法不会影响原有布局（脱离normal flow了呀，hhh
2. `position: fixed` + `Element.scrollTop`解决了**移动端滚动穿透**问题。ps：还有其他方法哦

**Todo：**

1. 完善测试组件的PropTypes及使用依赖注入减少耦合。😯
2. 引入过渡动画哈。🍺

#### 2.24 Swiper

Swiper组件，见Swiper.jsx、swiper.scss；测试组件：SwiperExample.jsx

**注意**：

1. 自动播放那块用的setInterval，存在性能问题
2. 目前bug较多，持续更新中

**Todo**：

1. 自动播放那里使用requestAnimationFrame进行优化 😖
2. 解决存在的bug 😖