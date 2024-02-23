// home page with a log in to determine which user's watchlists to display, and welcome
import React, {useState, useEffect} from 'react';
import { WatchlistApi } from './watchlistApi';

export default function Home() {
    // useState to hide and display components as needed and store and display user data
    const [watchlistCount, setWatchlistCount] = useState(0);
    const [user, setUser] = useState('');
    const [hideUserLogin, setHideUserLogin] = useState(true);
    const [hideWelcome, setHideWelcome] = useState(false);
    const hideLogin = () => {
        setHideUserLogin(!hideUserLogin);
        setHideWelcome(!hideWelcome);
    };
    const showLogin = () => {
        setHideUserLogin(!hideUserLogin);
        setHideWelcome(!hideWelcome);
    };
    // function to retrieve and display watchlists count 
    const getWatchlistCount = async () => {
        let watchlists = await WatchlistApi.get();
        setWatchlistCount(watchlists.length);
    };

    // also display # of watchlists and "go to my watchlists"
    useEffect(() => {
        getWatchlistCount();
    }, []);

    return(
        <div>
            {hideUserLogin ? (
            <div id='user-login'>
                <form>
                    <h3>Login</h3>
                    <label>Username</label>
                    <input 
                        placeholder='Please enter username...' 
                        type='text' onChange={(e) => setUser(e.target.value)} 
                        value={user}>
                    </input>
                    <label>Password</label>
                    <input placeholder='Please enter password...' type='password'></input>
                    <button className='btn btn-outline-light' type='submit' onClick={() => hideLogin()}>Go</button>
                </form>
            </div>
            ) : null}

            {hideWelcome ? (
            <div id='welcome-message'>
                <h2>Welcome, {user}... </h2>
                <p>You have {watchlistCount} <a id="watchlist-link" href='/watchlists'>watchlists</a>.</p>
            <div>
                <button id="change-user-btn" className='btn btn-sm btn-secondary' onClick={() => showLogin()}>Change User</button>
            </div>
            </div>
            ) : null}
        </div>
    )
}