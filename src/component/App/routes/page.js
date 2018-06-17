import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './1.css';
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowNum:1, //当前在哪页
            count:0,//总共有多少页
            pageNum:5 //显示几个
        }
    }

    changPage = (i) => {
        this.setState({nowNum:i});
    }
    
    render() { 
        let {pageNum} = this.state;
        let {PageC:count,changeNum:nowNum} = this.props;
       
        let center = pageNum%2?Math.ceil(pageNum/2):Math.ceil(pageNum/2)+1;
        
        let newA = [];

        if(nowNum <= center){
            for(let i=1;i<=pageNum;i++){
                newA.push(<Link 
                     to={{
                        pathname:`/page/${i}`,
                        state:{id:i}
                     }} 
                     key={i}
                     className={i===nowNum?'active':''}
                     onClick={()=>{this.changPage(i)}}
                 >{i}</Link>);
            }
        }else{
            for(let i=1;i<=pageNum;i++){
                if((count-center+1) < nowNum){
                    newA.push(<Link 
                        to={{
                            state:{id:count-pageNum+i},
                            pathname:`/page/${count-pageNum+i}`}} 
                        key={count-pageNum+i}
                        className={(count-pageNum+i)===nowNum?'active':''}
                        onClick={()=>{this.changPage(count-pageNum+i)}}
                    >{count-pageNum+i}</Link>);
                }else{
                    newA.push(<Link 
                        to={{
                            state:{id:nowNum-center+i},
                            pathname:`/page/${nowNum-center+i}`}}
                        key={nowNum-center+i}
                        className={(nowNum-center+i)===nowNum?'active':''}
                        onClick={()=>{this.changPage(nowNum-center+i)}}
                    >{nowNum-center+i}</Link>);
                }
            }
        }
        return (  
            <div className="page" id="page">
                {newA}            
            </div>       
       )
    }
}
 
export default Page;