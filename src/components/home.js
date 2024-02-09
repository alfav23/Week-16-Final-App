// home page with a log in to determine which user's watchlists to display, and welcome
import React, {useState} from 'react';
import WatchlistArray from './watchlistArray';

export default function Home() {
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
    // also display # of watchlists and "go to my watchlists"
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
                <p>You have {"3"} <a id="watchlist-link" href='/watchlists'>watchlists</a>.</p>
            <div>
                <button id="change-user-btn" className='btn btn-sm btn-secondary' onClick={() => showLogin()}>Change User</button>
            </div>
            </div>
            ) : null}
        </div>
    )
}