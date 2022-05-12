import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import Profile from "./Profile";
import Home from "./Home";
import '../App.scss'
import Gists from "./Gists";

const Router = () => {

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
                <li>
                    <Link to={"/gists"}>Gists</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/gists" element={<Gists />} />
                <Route path="/chats/:chatId" element={<Chats />} />
                <Route path="*" element={<Chats />} />
            </Routes>
        </BrowserRouter>
    )

};

export default Router