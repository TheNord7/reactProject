import { useState } from "react";
import { useCallback } from "react";
import { changeVisible } from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";


const Profile = () => {

    const { showName, name } = useSelector((state) => state)
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    const [value, setValue] = useState('');
    const newObj = ([...value, { value }]);

    const testForm = (event) => {
        setValue(event.target.value)
    }



    return <div>Profile
        <h1>{showName && <p>{value}</p>}</h1>
        <input value={value} onChange={testForm}></input>
        <button onClick={setShowName}>Click</button>
        /
    </div>

};

export default Profile;
