import React from 'react'

// styles import
import './styles/BigText.css';

type BigTextProps = {
  paragraph: string;
  title: string;
}

const BigText = ({ paragraph, title }: BigTextProps) => {
  return (
    <div className="text__content">
      <p className="text__paragraph">
        {paragraph}
      </p>
      <h1 className="text__title">
        {title}
      </h1>
    </div>
  )
}

export default BigText