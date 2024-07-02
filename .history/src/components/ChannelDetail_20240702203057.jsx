import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import { videos, channelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
const {id } = useParams();

useEffect(() => {
  fetchFromAPI(`channel`)

  }, [id])

  return (
    <div>
      ChannelDetail
    </div>
  )
}

export default ChannelDetail
