import { UserIcon } from "../constants/AppConstants";

const ChatMessage = ({ userIconUrl, userName, text }) => {

    return (
        <div className="flex mt-2 cursor-pointer px-5 hover:bg-gray-200">
            <div>
                <img alt="UserProfileImage" src={UserIcon} className="h-7" />
            </div>
            <div className="">
                <span className="px-3 text-gray-600 font-normal text-sm">{userName}</span>
                <span className="text-sm">{text}</span>
            </div>
        </div>
    );
}

export default ChatMessage;