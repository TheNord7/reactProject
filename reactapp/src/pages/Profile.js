import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import { setName } from "../store/profile/actions";


const Profile = () => {

    const { name } = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    const [value, setValue] = useState(name);

    const changeText = (event) => {
        setValue(event.target.value)
    }

    const changeName = () => {
        dispatch(setName(value));
    };




    return <div>
        <h3>Profile</h3>
        Имя: {name}<br />
        <Input
            style={{ marginRight: '10px' }}
            value={value} onChange={changeText}
            id="input-with-icon-adornment"
        />
        <Button style={{ color: 'white' }} type='submit' variant="contained" disableElevation onClick={changeName}>
            Save
        </Button>
    </div >

};

export default Profile;
