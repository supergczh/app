import React from 'react';
import '../../css/commodity.css';
import Page from './page';
import { NavLink } from 'react-router-dom';
import *as actionCreators from '../../actions/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Share from '../Share/share';
class Contentb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowpage: 1,
            pagecontent: 9,
            onOff: false,
        };
    }
    del = (i) => {
        let { data } = this.props
        if (data[i].checked) {
            data.splice(i, 1)
        }
        this.setState({ data })
    }
    onl = (e) => {
        let { nowpage } = this.state
        nowpage = e
        this.setState({ nowpage })

    }
    cc = (onOff2) => {
        let { onOff } = this.state
        onOff = onOff2
        this.setState({ onOff })
    }

    changeall = () => {
        let { onOff, nowpage, pagecontent } = this.state
        let { data } = this.props;
        onOff = !onOff
        for (let i = (nowpage - 1) * pagecontent; i < nowpage * pagecontent; i++) {
            if (data[i]) {
                data[i].checked = onOff
            }
        }
        this.setState(
            { onOff, data }
        )

    }

    render() {
        let { data } = this.props;

        let { nowpage, pagecontent, onOff } = this.state

        let count = Math.ceil(data.length / pagecontent)
        let arr = []
        for (let i = (nowpage - 1) * pagecontent; i < nowpage * pagecontent; i++) {
            if (data[i]) {
                arr.push(data[i])
            }
        }
        //判断全选开关
        onOff = arr.every(e => { return e.checked == true })
        console.log(onOff);
        let newArr = arr.map((e, i) => {
            let checkedonOff = e.checked ? 'checked' : ''

            return <Share
                {...{
                    key: i,
                    onOff,
                    arr,
                    e,
                    i,
                    del: this.del,
                    cc: this.cc,
                    checkedonOff
                }}
            />

        })


        return (
            <div>
                <div className="breadcrumb">
                    <i>商品管理</i>
                    <span>商品列表</span>
                    <div id="bread_r">
                        <div className="add">
                            <NavLink to='c'><i id="add">添加商品</i></NavLink>
                        </div>
                        <div className="remove">
                            <i id="remove">批量删除</i>
                        </div>
                    </div>
                </div>

                <div className="search"></div>
                <div className="comsearch comsearch_t">
                    <div className="comsearch_h">
                        <ul>
                            <li>
                                <select name="" id="" value="">
                                    <option value="">所有分类</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" value="">
                                    <option value="">所有品牌</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </li>
                            <li id="sch">
                                <input type="text" placeholder="关键词" id="searchs" />
                                <input type="button" value="搜索" id="searchs-btn" />
                            </li>
                        </ul>
                    </div>
                    <section className="tBody" >
                        <table id="tab" width="600" align="center" border="1" >
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox"
                                                onChange={this.changeall}
                                                checked={onOff}
                                            />
                                            <span></span>
                                        </label>
                                    </th>
                                    <th index="id">商品编号</th>
                                    <th>商品名称</th>
                                    <th index="price">商品图片</th>
                                    <th>货号</th>
                                    <th>价格</th>
                                    <th>上架</th>
                                    <th>库存</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="tb">
                                {newArr}
                            </tbody>
                        </table>
                    </section>
                    <Page onl={this.onl} count={count} cc={this.cc} onOff={onOff} />
                </div>
            </div>
        );
    }
}

// export default Contentb;
export default connect((state) => {
    return { data: state.reducer2 };
}, (dispatch) => bindActionCreators(actionCreators, dispatch))(Contentb) 