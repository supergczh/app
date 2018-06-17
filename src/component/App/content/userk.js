import React from 'react';
import '../../css/commodity.css';
import '../../css/public.css';
// import { NavLink } from 'react-router-dom';

class UserK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
           

                {/* <!-- 主体 --> */}
                <div className="contents">
                    <div className="breadcrumb">
                        <a href="">用户管理</a>
                        <span>用户列表</span>
                        <div id="bread_r">
                            <div className="remove4">
                                <a href="" id="remove5">刷新</a>
                            </div>

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
                                            <span>全部用户(</span>
                                            <span className="cache">10000</span>
                                            <span>)</span>
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="comsearch_h">
                            <ul>
                                <li id="sch">
                                    <input type="text" placeholder="用户ID" id="searchs" />
                                    <input type="button" value="搜索" id="searchs-btn" />
                                </li>

                                <li id="sch">
                                    <input type="text" placeholder="用户账号" id="searchs" />
                                    <input type="button" value="搜索" id="searchs-btn" />
                                </li>
                                <li id="sch">
                                    <select name="" id="set">
                                        <option value="">不限等级</option>
                                        <option value="">普通会员</option>
                                        <option value="">黄金会员</option>
                                        <option value="">白金会员</option>
                                        <option value="">钻石会员</option>
                                    </select>
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
                                    <th index="id">用户ID</th>
                                    <th>用户账户</th>
                                    <th index="price">用户昵称</th>
                                    <th>会员等级</th>
                                    <th>消费金额</th>
                                    <th>订单数量</th>
                                    <th>账号启用状态</th>
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
                                        <td>8447466</td>
                                        <td>18000000000</td>
                                        <td>Windir</td>
                                        <td>黄金会员</td>
                                        <td>¥2000.00</td>
                                        <td>10</td>
                                        <td>
                                            <img src="" alt="" className="iconfont icon-kaiguan4 active" />
                                        </td>
                                        <td>
                                            <i>查看</i>
                                            <i>编辑</i>
                                            <i>删除</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>8447466</td>
                                        <td>18000000000</td>
                                        <td>Windir</td>
                                        <td>黄金会员</td>
                                        <td>¥2000.00</td>
                                        <td>10</td>
                                        <td>
                                            <img src="" alt="" className="iconfont icon-kaiguan4 active" />
                                        </td>
                                        <td>
                                            <i>查看</i>
                                            <i>编辑</i>
                                            <i>删除</i>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>8447466</td>
                                        <td>18000000000</td>
                                        <td>Windir</td>
                                        <td>黄金会员</td>
                                        <td>¥2000.00</td>
                                        <td>10</td>
                                        <td>
                                            <img src="" alt="" className="iconfont icon-kaiguan4 active" />
                                        </td>
                                        <td>
                                            <i>查看</i>
                                            <i>编辑</i>
                                            <i>删除</i>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>8447466</td>
                                        <td>18000000000</td>
                                        <td>Windir</td>
                                        <td>黄金会员</td>
                                        <td>¥2000.00</td>
                                        <td>10</td>
                                        <td>
                                            <img src="" alt="" className="iconfont icon-kaiguan4 active" />
                                        </td>
                                        <td>
                                            <i>查看</i>
                                            <i>编辑</i>
                                            <i>删除</i>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>8447466</td>
                                        <td>18000000000</td>
                                        <td>Windir</td>
                                        <td>黄金会员</td>
                                        <td>¥2000.00</td>
                                        <td>10</td>
                                        <td>
                                            <img src="" alt="" className="iconfont icon-kaiguan4 active" />
                                        </td>
                                        <td>
                                            <i>查看</i>
                                            <i>编辑</i>
                                            <i>删除</i>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>8447466</td>
                                        <td>18000000000</td>
                                        <td>Windir</td>
                                        <td>黄金会员</td>
                                        <td>¥2000.00</td>
                                        <td>10</td>
                                        <td>
                                            <img src="" alt="" className="iconfont icon-kaiguan4 active" />
                                        </td>
                                        <td>
                                            <i>查看</i>
                                            <i>编辑</i>
                                            <i>删除</i>
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
            </div>
        );
    }
}

export default UserK;