
const URL = 'http://localhost:3000/watchlistArray';

class WatchlistArrayApi {
    // getting the initial watchlists data from api
    get = async() => {
        try{
            const resp = await fetch(URL);
            const data = await resp.json();
            console.log(`Get request: data:`, data)
            return data;
        } catch(e) {
            console.log('FAILURE:', e);
        }
    }

    // for update watchlist function
    put = async(watchlistArray) => {
        try{
            const resp = await fetch(`${URL}/${watchlistArray.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(watchlistArray)
            });
            return await resp.json();
        } catch(e) {
            console.log('FAILURE:', e)
        }
    }

    // delete method to delete watchlists by id takes watchlist id parameter
    delete = async(watchlistId) => {
        try{
            const resp = await fetch(`${URL}/${watchlistId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await resp.json();
        } catch(e) {
            console.log('FAILURE:', e)
        }
    }

    // post to update watchlist array with new watchlist
    post = async(newWatchlist) => {
        try{
            const resp = await fetch(`${URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newWatchlist)
            });
            return await resp.json();
        } catch(e) {
            console.log('FAILURE:', e)
        }
    }
} 

export const WatchlistApi = new WatchlistArrayApi();