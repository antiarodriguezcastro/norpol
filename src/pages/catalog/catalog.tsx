import React from 'react'
import piscinaImg from '../../images/piscina1.jpg';

const Catalog = () => {
  return (
    <div style={{backgroundImage: `url(${piscinaImg})`, position:'absolute', width:'100%', height:'calc(100vh - 53px)'}}>
        <div>Catalog</div>
    </div>
  )
}

export default Catalog