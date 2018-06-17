import React from 'react'
// import { Link } from 'react-router-dom';
class Page extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { 
            nowNum: 1, //当前在哪页
            // count: 15,//总共有多少页
            pageNum: 5 //总共显示多少条
         };
    }

    //点击页码是改变当前点击的页码  传给父级改变数据 
    //传递全选开关 让父级触发
    changPage = (i) => {
        let { onl, onOff,cc}=this.props
        this.setState({ nowNum: i });
        onl(i)
        onOff=!onOff
        cc(onOff)
    }

    render() {

        let { pageNum, nowNum} = this.state;
        let {  count} = this.props;
        if (count < pageNum) pageNum=count
        
        let center = pageNum % 2 ? Math.ceil(pageNum / 2) : Math.ceil(pageNum / 2) + 1;
        let newA = [];

        if (nowNum <= center) {
            for (let i = 1; i <= pageNum; i++) {
                newA.push(
                    
                   
                    <span key={i}
                        className={i === nowNum ? 'active' : ''}
                        onClick={() => { this.changPage(i) }}>{i}</span>);
            }
        } else {
            for (let i = 1; i <= pageNum; i++) {
                if ((count - center + 1) < nowNum) {
                    newA.push(
                        
                        <span key={count - pageNum + i}
                            className={(count - pageNum + i) === nowNum ? 'active' : ''}
                            onClick={() => { this.changPage(count - pageNum + i) }}>{count - pageNum + i}</span>);
                } else {
                    newA.push(
                    
                        <span key={nowNum - center + i}
                            className={(nowNum - center + i) === nowNum ? 'active' : ''}
                            onClick={() => { this.changPage(nowNum - center + i) }}>{nowNum - center + i}</span>);
                }
            }
        }

        return (
            <div id="page">
                <div className="pag">
                    <a href="javascript:;"className="pages">上一页</a>
                    {newA}  
                    共
                  <span className="count">{count}</span>页
                    <a href="javascript:;" className="pages">下一页</a> 到 第
                                <input type="text" placeholder="1" /> 页
                                <button>确定</button>
                </div>
            </div>
        );
    }
}

export default Page;