import React,{ Component } from 'react';
// import './App.css';
import '../../icon/iconfont.css';
import '../../css/font-awesome.min.css';
// import '../css/indexmin400max870.css';
// import '../css/indexmin870.css';
import '../../css/reset.css';
import Head from './head'
import Sidebar from './sidebar'
import Homea from '../content/homea'
import Contentb from '../content/contentb'
import Addc from '../content/addc'
import Addc2 from '../content/addc2'
import OrderE from '../content/ordere'
import ReturndF from '../content/returnf'
import RefundG from '../content/refundg'
import TradeH from '../content/tradeh'
import UserK from '../content/userk'
import GradeL from '../content/gradel'
import InfoO from '../content/infoo'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Route} from 'react-router-dom';
import { renderComponent } from './routers';


let routes = [
    {
        path: '/',
        exact: true,
        component: Homea
    },
    {
        exact: true,
        path: '/:id',
        render: ({ match }) => {
            let id = 'a';
            if (match.params) { id = match.params.id }
            switch (id) {
                case 'a':
                    return <Homea />
                case 'b':
                    return <Contentb />
                case 'c':
                    return <Addc />
                case 'c/c2':
                    return <Addc2 />
                case 'e':
                    return <OrderE />
                case 'f':
                    return <ReturndF />
                case 'g':
                    return <RefundG />
                case 'f':
                    return <ReturndF />
                case 'h':
                    return <TradeH />
                case 'k':
                    return <UserK />
                case 'l':
                    return <GradeL />
                case 'o':
                    return <InfoO />
                default :
                return
            }
        }
    }
];



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
           

        };
    }
    
    render() {
        
        return (
            <div className="main-container">
                <Sidebar />          
             <div className="content">
                <div className="cont">
                   <Head />
                    </div>
                    <div className="contents">
                        {renderComponent(routes)}
                    </div> 
                </div>
    
            </div>            
        )
    }
}

export default Index; 