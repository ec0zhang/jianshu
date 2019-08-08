import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2745626635,2537827859&fm=26&gp=0.jpg'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2156864466,186225210&fm=26&gp=0.jpg'
    },],
    articleList: [{
        id: 1,
        title: 'python基础练习题30道',
        desc: '1、执行python脚本的两种方式 答：1>可以在python /home/xxxx.py 2>cd /home ./xxxx.py 因为py...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/13717038-36a514dfa577db3a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 2,
        title: 'python基础练习题30道',
        desc: '1、执行python脚本的两种方式 答：1>可以在python /home/xxxx.py 2>cd /home ./xxxx.py 因为py...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/13540791-8a62442df7be8c0d.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 3,
        title: 'python基础练习题30道',
        desc: '1、执行python脚本的两种方式 答：1>可以在python /home/xxxx.py 2>cd /home ./xxxx.py 因为py...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/13717038-36a514dfa577db3a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 4,
        title: 'python基础练习题30道',
        desc: '1、执行python脚本的两种方式 答：1>可以在python /home/xxxx.py 2>cd /home ./xxxx.py 因为py...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/13717038-36a514dfa577db3a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },],
    commendList: [{
        id: 1,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    }, {
        id: 2,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    }, {
        id: 3,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    }, {
        id: 4,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
    },],
    WriterList: [{
        id: 1,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/2998364/9f8351c3734b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '道长是名思维贩子',
        desc: '写了194.5k字 · 52.5k喜欢',
        click: '+ 关注',
    }, {
        id: 2,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/6652326/ba6106f4-20eb-4735-885d-561083bd4e55.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '道长是名思维贩子',
        desc: '写了194.5k字 · 52.5k喜欢',
        click: '+ 关注',
    }, {
        id: 3,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '没文化的野狐狸',
        desc: '写了194.5k字 · 52.5k喜欢',
        click: '+ 关注',
    }, {
        id: 4,
        imgUrl: '//upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        name: '没文化的野狐狸',
        desc: '写了194.5k字 · 52.5k喜欢',
        click: '+ 关注',
    },],

});

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}