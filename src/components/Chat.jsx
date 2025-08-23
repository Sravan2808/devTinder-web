import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoIosSend } from "react-icons/io";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    console.log(chat.data.messages);
    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return { firstName: senderId?.firstName, lastName: senderId?.lastName, text };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });
    socket.on("receiveMessage", ({ firstName, lastName, text }) => {
      setMessages((messages) => [...messages, { firstName, lastName, text }]);
    });
    return () => {
      socket.disconnect(); // Clean up the socket connection on unmount
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };
  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600 text-zinc-400 ">
        Chitchat with the developers
      </h1>
      <div className="flex-1 overflow-auto p-5">
        {/* display messages */}
        {messages.map((message, index) => (
          <div key={index} className={"chat" + (user.firstName === message.firstName ? " chat-start" : " chat-end")}>
            <div className="chat-header">
              {`${message.firstName} ${message.lastName}`}
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{message.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>
        ))}
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border  border-gray-600 focus:outline-none text-zinc-400 rounded p-2"
          type="text"
        />
        <button onClick={sendMessage} className="btn btn-secondary">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;
