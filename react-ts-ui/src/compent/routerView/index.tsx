import React, { Fragment } from 'react'
import { Route, Routes, NavLink, Outlet, useNavigate } from 'react-router-dom'

import { mapRouterConfig } from '~/router/config'
import { IRouteConfig } from '~/compents/router/interface'

import Home from './home'
import About from './about'

const getReactNode = (component: React.LazyExoticComponent<React.FC> | React.FC | undefined) => {
	if (!component) return Fragment;

	return component;
}

const renderRouter = (routerList: IRouteConfig[]) => {
	return routerList.map((item) => {
		const { path, parent, children } = item;
		const Layout = getReactNode(item.layout);

		return (
			<Route
				key={path}
				path={path}
				element={ 
						<Layout>
									<>
										{item.compent}
										{parent && <Outlet/>}
									</>
						</Layout>
				}
		>

				{!!children && renderRouter(children)}

		</Route>
		)
	})
}

export const RouterView: React.FC = () => {
	const linkToNavigate = useNavigate();
    return (
        
            <div>
                <div>React Router App</div>
								<div>
									<div>
										<button onClick={() => {
											try {
												linkToNavigate('/home')
											} catch (error) {
												console.log(error)
											}
										}}>home</button>
										<button onClick={() => {
											try {
												linkToNavigate('/about')
											} catch (error) {
												console.log(error)
											}
										}}>about</button>

										
									</div>
								</div>
                <div>
                    <div>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
                <div>
                    <div className="panle">
                        <Routes>
													{/* { renderRouter(mapRouterConfig)} */}
													<Route path="/home" element={<Home></Home>}></Route>
													<Route path="/about" element={<About></About>}></Route>
												</Routes>
                    </div>
                </div>
            </div>
        
    )
}