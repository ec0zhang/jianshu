import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
    loader: () => import('./index'),
    // 这里 import 是异步加载的意思
    loading() {
        return <div>正在加载</div>
    },
});

export default () => <LoadableComponent/>

