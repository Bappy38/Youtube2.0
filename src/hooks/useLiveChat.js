import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { appendMessage } from "../store/chatSlice";
import { getIncrementalId, getRandomName, getRandomSentence } from "../utils/randomGenerator";

const useLiveChat = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const interval = setInterval(() => {

            console.log("CHAT API POLLING");
            dispatch(appendMessage(
                {
                    id: getIncrementalId(),
                    userIconUrl: '',
                    userName: getRandomName(),
                    text: getRandomSentence()
                }
            ));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
}

export default useLiveChat;