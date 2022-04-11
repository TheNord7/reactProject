import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import Profile from "./Profile";
import Home from "./Home";
import '../App.scss'
import { useState } from "react";
import Authors from "../Authors";

const chatsArr = {
    id1: {
        name: 'First chat',
        message: [{ text: 'Some text first', author: Authors.user }]
    },

    id2: {
        name: 'Second chat',
        message: [{ text: 'Some text second', author: Authors.bot }]
    }
};

const Router = () => {

    const [chats, setChats] = useState(chatsArr);

    return (
        <BrowserRouter>
            <ul className="menu">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                    <Link to={"/chats"}>Chats</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats/:chatId" element={<Chats chats={chats} />} />
                <Route path="*" element={<Chats chats={chats} />} />
            </Routes>
        </BrowserRouter>
    )

};

export default Router