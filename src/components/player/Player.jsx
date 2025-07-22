import React, { useEffect, useState } from 'react'
import './Player.css'
import Dilike from '../../assets/icons/dislike.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faEye, faThumbsDown, faShare, faArrowDown, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { calculate, youtube_api } from '../../assets/DataApi'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import moment from 'moment'

const Player = ({ id }) => {

  const [showMore, setShowMore] = useState(false);
  const [item, setItem] = useState([]);
  const [channel, setChannel] = useState([]);
  const fetch_api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${youtube_api}`;
  const fetch_channel = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item?.snippet?.channelId}&key=${youtube_api}`;

  useEffect(() => {

    async function fetchdata() {
      await fetch(fetch_api)
        .then((response) => response.json())
        .then((data) => setItem(data.items[0]));
    }
    fetchdata();
  }, [id]);
  useEffect(() => {

    async function fetchchanel() {
      if (item?.snippet?.channelId) {
        await fetch(fetch_channel)
          .then((Response) => Response.json())
          .then((Data) => setChannel(Data.items[0]));
      }
    }
    fetchchanel();
  }, [item])

  return (
    <div className='player-container'>
      <div className='player-video'>
        <iframe src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true' />
      </div>

      <div className='player-video-info'>
        {item && item.snippet && <h3>{item.snippet.title}</h3>}

        <div className='player-video-info-user'>
          {/* User Info */}
          <div className='user-info'>
            <div className='user-info-img'>
              
              {channel && channel.snippet && <img className='channelIcon' src={channel.snippet.thumbnails.high.url} alt="" />}

              <div className='userdetails'>
                {item && item.snippet && <h4>{item.snippet.channelTitle}</h4>}
                {channel && channel.statistics && <p>{calculate(channel.statistics.subscriberCount)} subscribers</p>}
              </div>
            </div>
            <div className='btn'>
              <button className='joinbtn'>Join</button>
              <button className='subbtn'>Subscribe</button>
            </div>
          </div>

          {/* Extrass like ,dislike, share ,download */}
          <div className='extra-info'>
            <div className='like-dislike'>
              <p><FontAwesomeIcon icon={faThumbsUp} size='lg' /> {item && item.statistics && <span>{calculate(item.statistics.likeCount)}</span> }</p>
              <div className='line'></div>
              <FontAwesomeIcon icon={faThumbsDown} flip="horizontal" size='lg' />
            </div>
            <div className='share'>
              <FontAwesomeIcon icon={faShare} size='lg' />
              <p>Share</p>
            </div>
            <div className='download'>
              <FontAwesomeIcon icon={faArrowDown} size='lg' />
              <p>Download</p>
            </div>
            <div className='dots'>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="description">
          <p className={showMore?"showmore":"showless"}>
            {calculate(item?.statistics?.viewCount)} views {showMore? moment(item?.snippet?.publishedAt).format().slice(0,10): moment(item?.snippet?.publishedAt).fromNow() }  <br />
            {item && item.snippet && <span>{item.snippet.description}</span>}
          </p>
          <button onClick={()=> setShowMore(!showMore)}  >{showMore?"show less ": ".....show more"}</button>
        </div>
        <div className='Comments'>
          <div className="comments-info">
            <h3>245 Comments</h3>
            <p><img src="https://img.icons8.com/windows/32/FFFFFF/sort-amount-up.png" alt="sort-amount-up" /> Sort by</p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Player