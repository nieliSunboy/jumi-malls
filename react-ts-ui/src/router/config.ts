import React, { lazy } from 'react'

import Layout from '../compent/Layout/index'
import TokenAuth from '../compent/Auths/tokenAuth'
import { IRouteConfig } from '~/compents/router/interface'

export const mapRouterConfig: IRouteConfig[] = [
    {
        path: '/',
        title: 'home',
        parent: true,
        layout: TokenAuth,
        children: [
            {   
                path: '/sys',
                title: 'system',
                parent: true,
                layout: Layout,
                children: [
                    {
                        path: '/sys/home',
                        title: 'Home',
                        compent: React.lazy(() => import("../compent/routerView/home"))
                    },
                    {
                        path: '/sys/user',
                        title: '用户管理',
                        compent: React.lazy(() => import("../compent/system/user/index"))
                    },


                ]
            },
            {   
                path: '/test',
                title: 'test',
                parent: true,
                layout: Layout,
                children: [
                    {
                        path: '/test/home',
                        title: 'test-Home',
                        compent: React.lazy(() => import("../compent/routerView/home"))
                    },
                    {
                        path: '/test/about',
                        title: 'test-About',
                        compent: lazy(() => import('../compent/routerView/about'))
                    }
                ]
            }
        ]
        
    },
    { path: '/login', title: 'login', parent: false, compent: React.lazy(() => import("../compent/Login/index")) },
    { path: '/mobx', title: 'mobxView', parent: false, compent: React.lazy(() => import("../compent/mobxView/index")) }
]

