import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Alert } from "antd";
import { useLogin } from "../hooks/useLogin";
import type { LoginForm } from "../types";

export function LoginForm() {
	const [form] = Form.useForm<LoginForm>();
	const { error, loading, submit: onFinish } = useLogin();

	return (
		<Form
			form={form}
			name="login"
			initialValues={{ remember: true }}
			style={{ maxWidth: 360, position: "relative" }}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "Please input your Username!" }]}
			>
				<Input prefix={<UserOutlined />} placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your Password!" }]}
			>
				<Input
					prefix={<LockOutlined />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Flex justify="space-between" align="center">
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<a href="">Forgot password</a>
				</Flex>
			</Form.Item>
			<Form.Item>
				<Button block type="primary" htmlType="submit" loading={loading}>
					Login
				</Button>
				or <a href="">Register now!</a>
			</Form.Item>
			{error && (
				<Alert
					style={{ position: "absolute" }}
					banner
					description={error}
					type="error"
				/>
			)}
		</Form>
	);
}
