import React from 'react';
class Homea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="overview">
                <div className="income">
                    <div className="inc">
                        <span className="iconfont icon-lianxirenweixuanzhong"></span>
                        <div className="total">
                            <p>990</p>
                            <i>商城用户</i>
                        </div>

                    </div>

                </div>
                <div className="income">
                    <div className="inc">
                        <span className="iconfont icon-xiaoshoubaobiao"></span>
                        <div className="total">
                            <p>990</p>
                            <i>交易记录</i>
                        </div>

                    </div>
                </div>
                <div className="income">
                    <div className="inc">
                        <span className="iconfont icon-gouwuche1"></span>
                        <div className="total">
                            <p>990</p>
                            <i>订单</i>
                        </div>

                    </div>
                </div>
                <div className="income">
                    <div className="inc">
                        <span className="iconfont icon-daiban"></span>
                        <div className="total">
                            <p>990</p>
                            <i>待办事项</i>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Homea ;