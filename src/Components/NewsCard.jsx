import React from 'react'
import CardsCol from './CardsCol'

const NewsCard = ({resources}) => {
  return (
    <div>
      <div className="container">
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {resources.map((resource,id)=>(
    <CardsCol key={id} resource={resource}/>
  ))}
</div>
</div>
    </div>
  )
}

export default NewsCard
