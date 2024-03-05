import React from 'react';
import { ShowForm } from './showForm';

export default function Watchlist({ watchlist, updateWatchlist, deleteWatchlist }) {
    const deleteShow = (showId) => {
        // creating an updated copy of watchlist which copies watchlist object and filters out the corresponding show by id from shows property within watchlist
        const updatedWatchlist = {
            ...watchlist,
            shows: watchlist.shows.filter((x) => x.id !== showId)
        };
        console.log(`This is the updated watchlist:`, updatedWatchlist)
        updateWatchlist(updatedWatchlist);
    }

    const addShow = (name, type, streamingService, genre, id) => {
        const updatedWatchlist = {
            // display existing shows on current watchlist and any new shows
            ...watchlist, shows: [...watchlist.shows, {name: name, type: type, streamingService: streamingService, genre: genre, id: id}]
        };
        console.log(`new show:`, name)
        updateWatchlist(updatedWatchlist);
    }
// rendering shows out to take the information input by user
    const renderShows = () => {
        return(
        <ul className='list-group list-group-flush border-dark bg-dark'>
            {watchlist.shows.map((show, index) => (
                <div key={index}>
                <li className='list-group-item bg-dark border-dark text-light'>{`${show.name}`}
                    {/* <button className='btn btn-outline-warning ms-2' onClick={()=>editShow(show.id)}>
                        Edit Show
                    </button> */}
                    <button className='btn btn-outline-secondary ms-2' onClick={()=>deleteShow(show.id)}>
                        Delete Show
                    </button>
                    {/* add a button for review show */}
                    <a href='/reviews'><button className='btn btn-outline-light ms-2'>
                        Add Review
                    </button></a>
                </li>
                <ul>
                    <li className='bg-dark border-dark text-danger'>{` Type: ${show.type}`}</li>
                    <li className='bg-dark border-dark text-danger'>{`Streaming Service: ${show.streamingService}`}</li> 
                    <li className='bg-dark border-dark text-danger'>{`Genre: ${show.genre}`} </li>
                </ul>
                </div>
                )
            )}
        </ul>
    )};
    
// rendering out watchlist card to display watchlist info and call render shows and form to add shows
    return(
        <div className='card bg-dark text-white border-secondary p-3'>
            <h6 className='text-end'>Watchlist {watchlist.id}</h6>
            <h5 className='card-title text-white'>{watchlist.listName}
                <button onClick={()=>deleteWatchlist(watchlist.id)} className='btn btn-outline-danger ms-2'>Delete</button>
            </h5>
            {renderShows()}
            {/* props to be used in Show Form component */}
            <ShowForm addShow={addShow} updateWatchlist = {updateWatchlist} />
            {/* <EditForm editShow={editShow} updateWatchlist = {updateWatchlist} /> */}
        </div>
    )
};