import React from 'react'

const CardsCol = ({key,resource}) => {
const url2 = "https://images.unsplash.com/photo-1650692201357-3b1b15469952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <div className="col-md-6" key={key}>
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis"><h5>{resource.name}</h5></strong>
          <h4 className="mb-0">{resource.title.slice(0,20)}</h4>
          <div className="mb-1 text-body-secondary">published at :{resource.publishedAt}</div>
          <p className="card-text mb-auto">{resource.content?resource.content.slice(0,50):"null"}</p>
          <a href={resource.url} className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            {/* <svg className="bi"><use xlink:href="#chevron-right"></use></svg> */}
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={resource.urlToImage?resource.urlToImage:url2} alt={resource.title} width="250" height="250" />
          </div>
      </div>
    </div>
    </>
  )
}

export default CardsCol
