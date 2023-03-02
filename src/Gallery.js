import React from 'react'

const Gallery = ({data}) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data.map((image) => (
          <div key={image.id} className="col">
              <img 
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
                className="card-img-top" 
                alt={image.title}
              />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery


