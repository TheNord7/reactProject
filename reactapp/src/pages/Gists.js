import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_PUBLIC } from "../constants/gists";
import { getAllGists } from "../store/gists/actions";
import { selectGists, selectGistsError, selectGistsLoading } from "../store/gists/selectors";

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsLoading);
    const error = useSelector(selectGistsError);

    const requestGists = useCallback(async () => {
        dispatch(getAllGists());
    }, [])



    useEffect(() => {
        requestGists();
    }, []);

    const renderGits = useCallback((gist) => <li key={gist.id}>{gist.description || 'NO DESCRIPTION'}</li>, []);

    if (loading) {
        return <CircularProgress />;
    };

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    };

    return (
        <ul>
            {gists.map(renderGits)}
        </ul>
    );
};

export default Gists;