import React, { useEffect } from 'react'
import {useStoreActions} from './TypedState'

const useTitle = (title: string) => {
  const setTitle = useStoreActions((actions)=>actions.Application.setTitle)
  useEffect(()=>{
    setTitle(title)
    return ()=>setTitle("")
  },[])
}

export default useTitle