import { data } from "./data";
import Message from "./components/Message";
import "./App.css";

function App() {
	const notificationsCount = data.reduce((acc, cur) => {
		if (!cur.read) {
			return acc + 1;
		}
		return acc;
	}, 0);

	console.log(notificationsCount);
	return (
		<main className="font-PlusJakartaSans p-4">
			<div className="flex justify-between items-center mb-5">
				<h1 className="text-lg font-bold">
					Notifications{" "}
					<span className=" text-sm py-1 px-2 bg-Blue rounded-lg text-white">
						{notificationsCount}
					</span>
				</h1>
				<p className="text-GrayishBlue">Mark all as read</p>
			</div>
			<div className="flex flex-col gap-4">
				{data.map((message) => {
					return (
						<Message
							key={message.name}
							id={message.id}
							name={message.name}
							action={message.action}
							time={message.time}
							picture={message.picture}
							message={message.message}
							place={message.place}
							picComment={message.picComment}
							privateMsg={message.privateMsg}
							read={message.read}
						/>
					);
				})}
			</div>
		</main>
	);
}

export default App;
