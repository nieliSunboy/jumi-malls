import React from "react";
import { Layout, Button, Space } from 'antd';
import { timer } from "../../store/tomer";
import TimerView from './timer'

const { Content } = Layout;



// function MobxView({tstStore}:{tstStore: TstStore}) {
//     return (
//         <Content>
//             <Space wrap>
//                 <h1>{tstStore.name}</h1>
//                 <Button type="primary" onClick={() => {
//                     tstStore.setName('name====')
//                 }}>点击设置</Button>
//             </Space>
//         </Content>
//     )
// }

const MobxView: React.FC = () => {
    return (
        <Content>
            <Space wrap>
                <TimerView timer={timer}></TimerView>
            </Space>
        </Content>
    )
}

export default MobxView;