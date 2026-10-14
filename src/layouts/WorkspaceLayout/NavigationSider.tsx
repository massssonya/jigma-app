import { useState } from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, type MenuProps } from "antd";
import {
	HomeOutlined,
	EditOutlined
} from "@ant-design/icons";

import { NAVIGATE_ROUTES } from "@shared/constants/routes"

import styles from "./WorkspaceLayout.module.css";

const { Sider } = Layout;

interface NavigationSiderProps {
    collapsed: boolean;
    onCollapse: (collapsed: boolean) => void;
  }

const navigationItems: MenuProps["items"] = [
    {
        key: NAVIGATE_ROUTES.HOME,
        icon: <HomeOutlined />,
        label: "Главная"
    },{
        key: NAVIGATE_ROUTES.EDITOR,
        icon: <EditOutlined />,
        label: "Редактор"
    }
];

export function NavigationSider({collapsed, onCollapse}: NavigationSiderProps){
    const location = useLocation();
    const navigate = useNavigate();

    const currentKey = location.pathname;

    return(
        <Sider
            collapsible 
            collapsed={collapsed}
            onCollapse={onCollapse} 
            className={styles.sider}>
			<div className={styles.logo}>
				<NavLink to={NAVIGATE_ROUTES.HOME}>Jigma</NavLink>
			</div>

			<Menu
				theme="dark"
				mode="inline"
				items={navigationItems}
                selectedKeys={[currentKey]}
				onClick={({ key }) => navigate(key)}
			/>
		</Sider>
    )
}