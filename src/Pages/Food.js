import React, { useEffect, useState } from 'react'

import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Food = () => {
    const[data,setData]=useState([])
  useEffect(()=>{
      const url = "https://blog-back-aakriti.herokuapp.com/api/food";
      fetch(url).then(res => res.json())
          .then(res => setData(res)  )
  },[])
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Food</h1>
            <h1 style={{ margin: "20px 0px 20px 39%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Food" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        data.filter((article) => { return article.category === "Food" }).map((n) => (
                            <SmallCard
                            articleid={n.id}
                            imgUrl={n.Image}
                            description={n.description.slice(0, 200)}
                            title={n.title.slice(0, 25)}
                            fulldescription = {n.description}
                            author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Food