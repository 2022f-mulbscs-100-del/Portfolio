import { title } from 'process'
import React from 'react'

interface  PillsProps{
title:string;
}

function Pills({title}:PillsProps) {
  return (
    <>
    <div className='border-2 border-white/[0.1] px-4 py-0 rounded-full w-fit'>
        {title}
    </div>
    </>
  )
}

export default Pills