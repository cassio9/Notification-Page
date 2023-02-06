import { data } from "./data";
import Message from "./components/Message";
import "./App.css";
import { useState } from "react";

function App() {
	const [messages, setMessages] = useState(data);

	const notificationsCount = messages.reduce((acc, cur) => {
		if (!cur.read) {
			return acc + 1;
		}
		return acc;
	}, 0);

	const changeStatusById = (id: string) => {
		setMessages((message) => {
			return message.map((message) => {
				return message.id === id ? { ...message, read: !message.read } : message;
			});
		});
	};
	const MarkAllAsRead = () => {
		setMessages((message) => {
			return message.map((message) => {
				return { ...message, read: true };
			});
		});
	};

	return (
		<main className="font-PlusJakartaSans p-4">
			<div className="flex justify-between items-center mb-5">
				<h1 className="text-lg font-bold">
					Notifications
					<span className=" text-sm py-1 px-2 bg-Blue rounded-lg text-white">
						{notificationsCount}
					</span>
				</h1>
				<p className="text-GrayishBlue" onClick={MarkAllAsRead}>
					Mark all as read
				</p>
			</div>
			<div className="flex flex-col gap-4">
				{messages.map((message) => {
					return <Message key={message.id} {...message} changeStatusById={changeStatusById} />;
				})}
			</div>
		</main>
	);
}

export default App;
