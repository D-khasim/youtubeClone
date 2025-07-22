import React from 'react'
import './sidebar.css'

const Sidebar = ({ sidebar, categery, setCategery }) => {
    return (
        <div className={`sidebar-container ${sidebar ? '' :'mini-sidebar' }`} >
            <div className='sidebar-home'>
                <div onClick={() => setCategery(0)} className={`sidebar-item ${categery === 0 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/home.png" alt="home" />
                    <h3>Home</h3>
                </div>
                <div>
                    <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/youtube-shorts.png" alt="youtube-shorts" />
                    <h3>Shorts</h3>
                </div>
                <div>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/video-playlist.png" alt="video-playlist" />
                    <h3>Subscriptions</h3>
                </div>

            </div>
            <hr />
            <div className='explore-items'>
                <div onClick={() => setCategery(1)} className={`heading sidebar-item ${categery === 1 ? 'active' : ''}`} >
                    <h3>Explore</h3>

                </div>
                <div onClick={() => setCategery(24)} className={`sidebar-item ${categery === 24 ? 'active' : ''}`}>
                    <img width="32" height="32" src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/FFFFFF/external-trending-user-interface-basic-anggara-glyph-anggara-putra.png" alt="external-trending-user-interface-basic-anggara-glyph-anggara-putra" />
                    <h3>Trending</h3>
                </div>
                <div onClick={() => setCategery(2)} className={`sidebar-item ${categery === 2 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/shopping-bag.png" alt="shopping-bag" />
                    <h3>Shopping</h3>
                </div>
                <div onClick={() => setCategery(10)} className={`sidebar-item ${categery === 10 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-music.png" alt="apple-music" />
                    <h3>Music</h3>
                </div>
                <div onClick={() => setCategery(30)} className={`sidebar-item ${categery === 30 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/clapperboard.png" alt="clapperboard" />
                    <h3>Movies</h3>
                </div>
                <div onClick={() => setCategery(5)} className={`sidebar-item ${categery === 5 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube-live.png" alt="youtube-live" />
                    <h3>Live</h3>
                </div>
                <div onClick={() => setCategery(20)} className={`sidebar-item ${categery === 20 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/ps-controller.png" alt="ps-controller" />
                    <h3>Gaming</h3>
                </div>
                <div onClick={() => setCategery(25)} className={`sidebar-item ${categery === 25 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/google-news.png" alt="google-news" />
                    <h3>News</h3>
                </div>
                <div onClick={() => setCategery(40)} className={`sidebar-item ${categery === 40 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/trophy.png" alt="trophy" />
                    <h3>Sports</h3>
                </div>
                <div onClick={() => setCategery(27)} className={`sidebar-item ${categery === 27 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/graduation-cap.png" alt="graduation-cap" />
                    <h3>Courses</h3>
                </div>
                <div onClick={() => setCategery(6)} className={`sidebar-item ${categery === 6 ? 'active' : ''}`}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/mens-pajama.png" alt="mens-pajama" />
                    <h3>Fashion & Beauty</h3>
                </div>
                <div onClick={() => setCategery(7)} className={`sidebar-item ${categery === 7 ? 'active' : ''}`}>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/browse-podcasts.png" alt="browse-podcasts" />
                    <h3>Podcasts</h3>
                </div>
                <hr />
            </div>
            <div className='you-items'>

                <div className='heading'>
                    <h3>You </h3>
                    <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-single-chevron-arrow-as-a-notch-badge-basic-bold-tal-revivo.png" alt="external-single-chevron-arrow-as-a-notch-badge-basic-bold-tal-revivo" />
                </div>
                <div>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/time-machine--v1.png" alt="time-machine--v1" />
                    <h3>History</h3>
                </div>
                <div>
                    <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/FFFFFF/list.png" alt="list" />
                    <h3>Play List</h3>
                </div>
                <div>
                    <img width="64" height="64" src="https://img.icons8.com/hatch/64/FFFFFF/movies-folder.png" alt="movies-folder" />
                    <h3>Your Vedios</h3>
                </div>
            </div>

        </div>
    )
}

export default Sidebar