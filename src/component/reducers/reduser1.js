import { combineReducers} from 'redux';
import axios from 'axios';

let arr=
    [
        {
            k: '商品管理',
            onOff: true,
            icon: 'icon-desktop',
            child: [
                {
                    title: "商品列表",
                    rs: '/b',
                },
                {
                    title: "添加商品",
                    rs: '/c',
                }
            ]
        },
        {
            k: '图片管理',
            onOff: false,
            icon: 'icon-picture',
            child: [
                {
                    title: "图片库管理",
                    rs: '/d',
                },

            ]
        },
        {
            k: '订单管理',
            onOff: false,
            icon: 'icon-list',
            child: [
                {
                    title: "订单列表",
                    rs: '/e',
                },
                {
                    title: "退货申请处理",
                    rs: '/f',
                },
                {
                    title: "退款申请处理",
                    rs: '/g',
                }
            ]
        },
        {
            k: '交易管理',
            onOff: false,
            icon: 'icon-credit-card',
            child: [
                {
                    title: "交易统计",
                    rs: '/h',

                },
                {
                    title: "商品统计",
                    rs: '/i',
                },
                {
                    title: "会员统计",
                    rs: '/j',
                }
            ]
        },
        {
            k: '用户管理',
            onOff: false,
            icon: 'icon-user',
            child: [
                {
                    title: "用户列表",
                    rs: '/k',
                },
                {
                    title: "会员等级设置",
                    rs: '/l',
                },

            ]
        },
        {
            k: '消息管理',
            onOff: false,
            icon: 'icon-comments-alt',
            child: [
                {
                    title: "短信消息",
                    rs: '/o',
                },
                {
                    title: "系统消息",
                    rs: '/p',
                }
            ]
        },
        {
            k: '系统管理',
            onOff: false,
            icon: 'icon-cogs',
            child: [
                {
                    title: "账户设置",
                    rs: '/q',
                },

            ]
        }
    ]


const reducer1 = (state = arr, action) => {
    switch (action.type) {
        case '': 
            return 
        default:
            return state
    }
}




let data=[
    {
        id: 1,
        onOff: true,
        Name: "后片连袖印花体恤",
        Number: 1,
        Stock:100,
        checked: false,
    },
    {
        id: 2,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 3,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 4,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 5,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 5,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 5,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 5,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 5,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 10,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 11,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 12,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 13,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 14,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 15,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 16,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 17,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 18,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
    {
        id: 19,
        onOff: false,
        Name: "后片连袖印花体恤",
        Number: 2,
        Stock: 100,
        checked: false,
    },
]





const reducer2 = (state = data, action) => {
    switch (action.type) {
        case 'ADS':
        console.log(1);
            let record=[]
            axios.get("https://5b260e1cc39cbf00140ef61b.mockapi.io/goodsdata").then(
                response => {
                    record.push(response.data)
                }
            )
            console.log(record);
            
            return record
        default:
            return state
    }
}








const reducers = combineReducers({
    reducer1,
    reducer2,
});
export {reducers};