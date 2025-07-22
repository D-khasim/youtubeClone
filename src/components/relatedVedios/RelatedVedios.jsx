import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './RelatedVedios.css'
import { youtube_api } from '../../assets/DataApi'

const RelatedVedios = ({ id }) => {

  const [item, setItem] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);


  useEffect(() => {
    const fetchdata = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${youtube_api}`;
    async function rellist() {
      await fetch(fetchdata)
        .then((Response) => Response.json())
        .then((data) => setItem(data.items[0]));
    }
    rellist();
    console.log('fetched data1 completed')
  }, [id])
  useEffect(() => {
    const apilink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${item?.snippet?.channelId}&maxResults=25&q=surfing&key=${youtube_api}`;
    if (item?.snippet?.channelId) {

      console.log('fetched data2')
      console.log(item?.snippet?.channelId);
      async function fetchdata() {
        await fetch(apilink)
          .then((Response) => Response.json())
          .then((data) => setRelatedVideos(data.items))
      }
      
      
      fetchdata();
      console.log('fetched data2 completed')
      console.log(relatedVideos?.snippet?.title)
    }
    else {console.log('channel id is not found')}

  }, [item])



  return (
    <div>
      <div className='RelatedVedios'>
        <div className='container'>
          {relatedVideos.map((item) => (
            <div className='card' >
              <Link to={`/vedio/${item.id.videoId}`} ><img src={item.snippet.thumbnails.high.url} alt='' /></Link>
              <div className='card-info'>
                <h5>{item.snippet.title}</h5>
                <p>{item.snippet.channelTitle}</p>
                <p></p>
              </div>
            </div>))}
        </div>



      </div>
    </div>
  )
}

export default RelatedVedios