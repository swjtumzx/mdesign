import React, { FC, useState, DragEvent, ReactNode } from 'react';
import classNames from 'classnames';

export interface DraggerProps {
  onFile : (files: FileList) => void;
  children?:ReactNode;
  style?:React.CSSProperties
}

export const Dragger: FC<DraggerProps> = (props) => {
  const {
    onFile,
    children,style
  } = props


  const [dragOver, setDragOver] = useState(false)
  const classes = classNames('m-uploader-dragger', {
    'is-dragover': dragOver
  })
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  return (
    <div 
      className={classes}
      onDragOver={e => {handleDrag(e, true)}}
      onDragLeave={e => {handleDrag(e, false)}}
      onDrop={handleDrop}
      style={style}
    >
      {children}
    </div>
  )
}


export default Dragger;