## 引例

```js
import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    //保存数据
    this.state = {
      title: "你好"
    };
  }

  change() {
    //设置数据
    this.setState({ title: "我很好！", age: 18 });
  }
  render() {
    return (
      <div>
        <h1> {this.state.title} </h1>
        <button onClick={this.change.bind(this)}> 点击按钮 </button>
      </div>
    );
  }
}
```



### 一，State介绍

React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

在 React Component 可以自己管理自己的内部 state，并用 this.state 来存取 state。当 setState() 方法更新了 state 后将重新呼叫 render() 方法，重新绘制 component 内容。

### 二，设置State数据

```
构造函数中
this.state = {
            title:"你好"
        }
```

### 三，获得State数据

```
this.state.title
```

### 四，bind

bind() 方法与 apply 和 call很相似，也是可以改变函数体内 this 的指向。bind 是返回对应函数，便于稍后调用.

```
 <button onClick={(this.change).bind(this)}>点击按钮</button>
```

### 五，改变State数据

setState()方法用于更新组件的状态。 这种方法不会替代状态，而只是添加对原始状态的更改。

```
 this.setState({ title:"我很好！"})
 或
 this.setState(...this.state, title:"我很好")
```

