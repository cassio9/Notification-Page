import { Props } from "../data";

const Message = ({
	name,
	action,
	message,
	place,
	picture,
	time,
	privateMsg,
	picComment,
	read,
	id,
	changeStatusById,
}: Props) => {
	return (
		<div
			id={id}
			onClick={() => {
				changeStatusById(id);
			}}
			className={` p-4 rounded-lg flex gap-4 items-start ${
				!read ? "bg-LightGrayishBlue1 cursor-pointer" : "bg-white"
			}`}>
			<img className="w-14 h-14" src={picture} alt="" />
			<div className="flex flex-col w-full">
				<div className="flex items-center relative">
					<p className={`${!read && "after:content-['🔴'] after:opacity-50 after:pl-4 "}`}>
						<span className="font-bold cursor-pointer hover:text-Blue">{name} </span>
						<span className="text-DarkGrayishBlue"> {action}</span>
						<span className="font-bold text-DarkGrayishBlue cursor-pointer hover:text-Blue">
							{" "}
							{message}
						</span>
						<span className="font-bold text-Blue cursor-pointer"> {place} </span>
					</p>
					{picComment && (
						<img src={picComment} className="w-14 cursor-pointer absolute right-0" alt="" />
					)}
				</div>
				<p className="text-GrayishBlue">{time}</p>
				{privateMsg && (
					<p className="p-4 pr-8 text-DarkGrayishBlue  border-[1px] border-GrayishBlue rounded-lg mt-2 hover:bg-LightGrayishBlue1 hover:border-LightGrayishBlue1 cursor-pointer">
						{privateMsg}
					</p>
				)}
			</div>
		</div>
	);
};

export default Message;
