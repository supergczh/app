import React from 'react'
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="cont-r">

                <div className="xiaoxigonggao">
                    <span className="iconfont icon-xiaoxigonggao "></span>
                    <div className="notify">
                        <span className="heartbit"></span>
                        <span className="point"></span>
                    </div>
                </div>

                <div className="xinfeng">
                    <span className="iconfont icon-icon-p_xinfeng "></span>
                    <div className="notify">
                        <span className="heartbit"></span>
                        <span className="point"></span>
                    </div>
                </div>


                <div id="user">
                    <div className="user-icon"></div>
                </div>
            </div>
        );
    }
}

export default Head;