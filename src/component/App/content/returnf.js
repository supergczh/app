import React from 'react';
import '../../css/commodity.css';
import '../../css/add.css';
// import { NavLink } from 'react-router-dom';

class ReturndF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="breadcrumb">
                    <a href="">订单管理</a>
                    <span>退货申请处理</span>
                    <div id="bread_r">
                    </div>
                </div>


                <div className="search"></div>
                {/* <!-- 表单  --> */}
                <div className="comsearch comsearch_t">
                    <div className="comsearch_h comsearch_h1">
                        <ul id="order">
                            <li>
                                <div className="active">
                                    <p>
                                        <span>全部申请(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <p>
                                        <span>待处理(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>
                                        <span>退货中(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>

                                    <p>
                                        <span>已完成(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>

                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>
                                        <span>已拒绝(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>

                                </div>
                            </li>
                            <li>

                                <div>
                                    <p>
                                        <span>已关闭(</span>
                                        <span className="cache">1000</span>
                                        <span>)</span>
                                    </p>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="comsearch_h">
                        <ul>
                            <li id="sch">
                                <input type="text" placeholder="订单号" id="searchs" />
                                <input type="button" value="搜索" id="searchs-btn" />
                            </li>

                            <li id="sch">
                                <input type="text" placeholder="收货人姓名/手机号码" id="searchs" />
                                <input type="button" value="搜索" id="searchs-btn" />
                            </li>
                        </ul>
                    </div>
                    <section className="tBody">
                        <table id="tab" width="600" align="center" border="1">
                            <thead>
                                <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" />
                                        <span></span>
                                    </label>
                                </th>
                                <th index="id">订单编号</th>
                                <th>申请时间</th>
                                <th index="price">用户账号</th>
                                <th>退款金额</th>
                                <th>联系人</th>
                                <th>申请状态</th>
                                <th>操作</th>
                                </tr>
                            </thead>
                            <tbody id="tb">
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <label>
                                            <input type="checkbox" />
                                            <span></span>
                                        </label>
                                    </td>
                                    <td>201707196398345</td>
                                    <td>2018-02-12 14:48:38</td>
                                    <td>18000000000</td>
                                    <td>¥200.00</td>
                                    <td>大梨</td>
                                    <td>待处理</td>
                                    <td>
                                        <i>查看详情</i>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </section>

                    <div id="page">
                        <div className="pag">
                            <a href="">上一页</a>
                            <i>1</i>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>...
                            <span>10</span>
                            <a href="">下一页</a> 到 第
                            <input type="text" placeholder="1" /> 页
                            <button>确定</button>
                        </div>
                    </div>
                </div>
            </div>

            );
    }
}

export default ReturndF;