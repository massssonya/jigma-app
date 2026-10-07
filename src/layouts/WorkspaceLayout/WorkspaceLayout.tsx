import { Avatar, Dropdown, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
	LogoutOutlined,
	SettingOutlined,
	HomeOutlined,
	FolderOutlined
} from "@ant-design/icons";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

import styles from "./WorkspaceLayout.module.css";

const { Header, Sider, Content } = Layout;

export function WorkspaceLayout() {
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

	const navigationItems: MenuProps["items"] = [
		{
			key: "/",
			icon: <HomeOutlined />,
			label: "Главная"
		},
		{
			key: "/projects",
			icon: <FolderOutlined />,
			label: "Проекты"
		}
	];

	return (
		<Layout className={styles.layout}>
			<Sider className={styles.sider}>
				<div className={styles.logo}>
					<NavLink to={"/"}>Jigma</NavLink>
				</div>

				<Menu
					theme="light"
					mode="inline"
					items={navigationItems}
					onClick={({ key }) => navigate(key)}
				/>
			</Sider>

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
