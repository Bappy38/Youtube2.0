import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { appendMessage } from "../store/chatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages);

    var count = 0;

    useEffect(() => {

        const interval = setInterval(() => {
            
            console.log("API Polling");
            dispatch(appendMessage({
                id: ++count,
                userIconUrl: '',
                userName: 'Bappy38',
                text: 'Dummy Message ' + count
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="
            border
            border-slate-300
            w-full
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

        </div>
    );
}

export default LiveChat;