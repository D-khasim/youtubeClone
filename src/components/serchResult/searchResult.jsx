import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar';
import './searchResult.css'
import { youtube_api } from '../../assets/DataApi';
import moment from 'moment';

const searchResult = ({ sidebar }) => {

    const param = useParams();
    const [rdata, setRdata] = useState([]);

    useEffect(() => {
        console.log(param.id);
        const result_api = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${param.id}&type=video&maxResults=10&key=${youtube_api}`;
        if (param) {
            async function fetchResult() {
                await fetch(result_api)
                    .then((response) => response.json())
                    .then((data) => setRdata(data.items));
            }
            fetchResult();
        } else {
            console.log("No search parameter provided");
        }
    }, [param]);
    return (
        <div className='Result-container'>
            <Sidebar sidebar={sidebar} />
            <div className={`result-item ${sidebar ? '' : 'max-result'}`}>
                {rdata?.map((item,index) => (
                <div className='result' key={index}>
                        <div className='img'>
                            <img src={item?.snippet?.thumbnails?.high?.url} alt="" />
                        </div>
                        <div className='img-data'>
                            <div>
                                <h4> {item.snippet.title} </h4>
                                <p>{moment(item.snippet.publishedAt).format().slice(0,10)}</p>
                            </div>
                            <div>
                                <h3>{item.snippet.channelTitle}</h3>
                                <p>{item.snippet.description}</p>
                            </div>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    )
}

export default searchResult