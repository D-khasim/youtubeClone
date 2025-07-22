import React from 'react'
import Player from '../components/player/Player'
import RelatedVedios from '../components/relatedVedios/RelatedVedios'
import './VedioPlayer.css'
import { useParams } from 'react-router-dom'



const VedioPlayer = () => {
  const { id } = useParams();
  return (
    <div className='vedio-player'>
        <Player id={id}/>
        <RelatedVedios id={id} />
    </div>
  )
}

export default VedioPlayer