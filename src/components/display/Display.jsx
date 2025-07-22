import React, { useEffect, useState } from 'react'
import NewMovies from '../../assets/newMovies'
import './display.css'
import { Link } from 'react-router-dom'
import { calculate, youtube_api } from '../../assets/DataApi'
import moment from 'moment'

const Display = ({ categery }) => {
    const [data, setData] = useState([]);

    const result = async () => {
        const apilink = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categery}&key=${youtube_api}`
        await fetch(apilink)
            .then((res) => res.json())
            .then((data) => setData(data.items))
    }
    useEffect(() => {
        result();
    }, [categery]);


    return (
        <div className='display'>
            <div className='container'>

                {data?.map((item, index) => (
                    <div className='card' key={index}>
                        <div>
                            <Link to={`/vedio/${item.id}`} > <img src={item.snippet.thumbnails.standard.url} alt='' /></Link>
                            <div className='card-info'>
                                <h3>{item.snippet.title}</h3>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{calculate( item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                            </div>
                        </div>
                    </div>))}
            </div>



        </div>
    )
}

export default Display