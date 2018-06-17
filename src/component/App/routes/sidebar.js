import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    click = (e) => {
        let { arr } = this.props
        arr.forEach((ev, i) => {
            if (i !== e) {
                ev.onOff = false
            }
        })
        arr[e].onOff = !arr[e].onOff
        this.setState({ arr })
    }

    render() {
        let { arr } = this.props
        let a = null
        let num = 0;
        let new2 = []
        arr.forEach((e, i) => {
            if (e.child) {
                let arr4 = e.child.map(e => {
                    num++
                    return (
                        <li className="add" key={+new Date() + num} >
                            < NavLink activeClassName="active" to={e.rs} >
                                <span className="add">{e.title}</span>
                            </NavLink>
                        </li>
                    )
                })
                new2.push(arr4)
            }
        })

        let newArr = arr.map((e, i) => {
            a = e.onOff ? 'down' : 'ndown'
            let newArr3 = new2[i]
            return (
                <li key={i} >
                    <i className="dli" onClick={this.click.bind(this, i)}>
                        <i className={e.icon}></i>
                        <span className="add">{e.k}</span>
                        <i className="iconfont icon-xiangxiajiantou"></i>
                    </i>
                    <ul className={a}>
                        {newArr3}
                    </ul>
                </li>

            )
        })


        return (
            <div className="sidebar" id="sidebar">
                <div className="ce">
                    <div className="shortcuts  iconfont icon-aislogo">Falcon</div>
                </div>

                <ul id="oUl">
                    <li id="dli2">
                        <NavLink exact to='/' activeClassName="active" >
                            <i className="icon-home " id="home"></i>
                            <span className="add">首页</span>
                            <i className="iconfont ic"></i>
                        </NavLink>

                    </li>
                    {newArr}
                </ul>
            </div>
        );
    }
}
export default connect((state) => {
    return { arr: state.reducer1 };
}, (dispatch) => {
    // return bindActionCreators(action, dispatch)
    return {}
    })(Sidebar) 
// export default Sidebar;