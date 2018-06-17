import React from 'react'
import *as actionCreators from '../../actions/action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
class Share extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
  //单选开关
    change = (e) => {
      
        let { data ,onOff,arr,cc} = this.props
        e.checked = !e.checked
        
        onOff = arr.every(e => { return e.checked ===true }) 
        cc(onOff)
        this.setState({data})
    }
    //删除
    del = (e) => {
        let {del} = this.props
        del(e)
        axios.delete("https://5b260e1cc39cbf00140ef61b.mockapi.io/goodsdata/"+e).then(
            response => {}
            
        ).catch(
            // error => console.log(error.message)
        )

    }
    //上架开关
    onShelf = (e) => {
        let { data } = this.props
        e.onOff = !e.onOff
        this.setState({ data })
    }
    render() {
        let { e,i}=this.props
        let imgonOff = e.onOff ? "iconfont icon-kaiguan4 active " : "iconfont icon-kaiguan3 ";
        return (
            <tr key={i}>
                <td >
                    <label>
                        <input type="checkbox"
                            checked={e.checked}
                            onChange={this.change.bind(this, e)}
                        />
                        <span></span>
                    </label>
                </td>
                <td>{e.id}</td>
                <td>
                    <p>{e.Name}</p>
                    <p>
                        <i>Victoria</i>
                    </p>
                </td>
                <td>
                    <img src="images/1.png" alt="" />
                </td>
                <td>212997364628</td>
                <td>59.9</td>
                <td>
                    <img src="" alt="" className={imgonOff}
                        onClick={this.onShelf.bind(this, e)}
                    /></td>
                <td>100</td>
                <td>
                    <i>查看</i>
                    <i>编辑</i>
                    <i
                        onClick={this.del.bind(this,e.id) }
                    >删除</i>
                </td>
            </tr>
        );
    }
}

export default connect((state) => {
    return { data: state.reducer2 };
}, (dispatch) => bindActionCreators(actionCreators, dispatch))(Share) 
// export default Share;