import { useState } from 'react'
import { Avatar, Dropdown, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
	LogoutOutlined,
	SettingOutlined,
	HomeOutlined,
	FolderOutlined
} from "@ant-design/icons";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

import { NavigationSider } from "./NavigationSider"

import styles from "./WorkspaceLayout.module.css";

const { Header, Content } = Layout;

export function WorkspaceLayout() {
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();

	const accountItems: MenuProps["items"] = [
		{
			key: "settings",
			icon: <SettingOutlined />,
			label: "Настройки",
			onClick: () => navigate("/settings")
		},
		{
			type: "divider"
		},
		{
			key: "logout",
			icon: <LogoutOutlined />,
			label: "Выйти"
		}
	];

	return (
		<Layout className={styles.layout}>
			<NavigationSider 
				collapsed={collapsed} 
				onCollapse={setCollapsed} 
			/>
			<Layout>
				<Header className={styles.header}>
					<Dropdown
						menu={{ items: accountItems }}
						trigger={["click"]}
						placement="bottomRight"
					>
						<Avatar className={styles.avatar} size="default">
							U
						</Avatar>
					</Dropdown>
				</Header>

				<Content className={styles.content}>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
}
