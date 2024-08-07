import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { appendMessage } from "../store/chatSlice";
import { getIncrementalId } from "../utils/randomGenerator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import useLiveChat from "../hooks/useLiveChat";

const LiveChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages);

    useLiveChat();

    const [ messageToSend, setMessageToSend ] = useState('');

    const handleSendMessage = () => {
        dispatch(appendMessage({
            id: getIncrementalId(),
            userIconUrl: '',
            userName: "Bappy38",
            text: messageToSend
        }));
        setMessageToSend('');
    }

    return (
        <div className="
            w-[400px]
            h-[500px]
            border
            border-slate-300
            ml-7
            rounded-lg
            flex
            flex-col">
            
            <div className="border-b border-slate-300 py-3 px-5">
                Live Chat
            </div>

            <div
                className="overflow-auto h-full flex flex-col-reverse">
                {
                    messages.map(message => (
                        <ChatMessage
                            key={message.id}
                            userIconUrl={message.userIconUrl}
                            userName={message.userName}
                            text={message.text}
                        />
                    ))
                }
            </div>

            <form
                className="w-full border-t border-slate-300 py-3 px-5 flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                }}
            >
                <input
                    className="w-full rounded-full bg-gray-200 p-2"
                    type="text"
                    placeholder="Chat..."
                    value={messageToSend}
                    onChange={(e) => {
                        setMessageToSend(e.target.value);
                    }}
                />
                {
                    messageToSend && <button type="submit" className="hover:bg-gray-200 rounded-full ml-2 p-2">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                }
            </form>

        </div>
    );
}

export default LiveChat;