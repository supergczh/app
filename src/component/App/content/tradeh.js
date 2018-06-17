import React from 'react';
import '../../css/commodity.css';
import '../../css/add.css';
import '../../css/jd.css';
import '../../css/user.css';
import '../../css/public.css';
// import { NavLink } from 'react-router-dom';

class TradeH extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="breadcrumb">
                    <a href="">交易管理</a>
                    <span>交易统计</span>
                    <div id="bread_r">
                    </div>
                </div>

                <div className="jb">
                    <div className="j-t">
                        <div className="f-img j-img">
                            <img src="" alt="" className="iconfont icon-shuqian" />
                                <span>交易数据</span>
                                <div className="jt-r">
                                    <button className="active">昨天</button>
                                    <button>最近7天</button>
                                    <button>最近30天</button>
                                </div>
                        </div>
                            <div className="comsearch comsearch_t comsearch_t2  comsearch_t comsearch_t3">
                                <section className="tBody tbody" id="td2">
                                    <table id="tab" width="600" align="center" border="1">
                                        <thead>
                                            <tr>
                                            <th index="id">浏览人数</th>
                                            <th>下单人数</th>
                                            <th index="price">订单数</th>
                                            <th>下单件数</th>
                                            <th>有效订单数</th>
                                            <th>下单金额</th>
                                           </tr>
                                            
                                        </thead>
                                        <tbody id="tb">
                                            <tr>
                                                <td>1888</td>
                                                <td>80</td>
                                                <td>144</td>
                                                <td>643</td>
                                                <td>130</td>
                                                <td><i className="is">￥</i>1905871.71</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                            <th index="id">退款金额</th>
                                            <th>付款人数</th>
                                            <th index="price">付款订单数</th>
                                            <th>付款件数</th>
                                            <th>付款金额</th>
                                            <th>客单价</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tb">
                                            <tr>
                                                <td><i className="is">￥</i>1046.01</td>
                                                <td>55</td>
                                                <td>81</td>
                                                <td>381</td>
                                                <td><i className="is">￥</i>1967849.99</td>
                                                <td><i className="is">￥</i>24294.44</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                                <div style={{margin: "0 auto" ,width: "100%"}}>
                                <img src={require('./img/u15877.png')}alt="" />
                            </div>
                                </div>
                            </div>

                        </div>
            </div>
        );
    }
}

export default TradeH;