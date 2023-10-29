import React, { useEffect, useState } from 'react'
import { fetchData } from '../api/api';

const List = ({title,param}) => {
  const [list,setList]=useState([]);

  useEffect(()=>{
  getApi()
 
  },[])

const getApi=()=>{
  fetchData(param).then(res=>setList(res.data.results))
  
}
console.log(list)

  return (
    <div className="list">
    <div className="row">
      <h2 className="text-white title">{title}</h2>
      <div className="col">
        <div className="row__posters">
        {list.map(item=>(
 <img key={item.id}  className="row__poster row__posterLarge"
 src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
 alt={item.title}/>
        ))}
          
       
         
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default List
