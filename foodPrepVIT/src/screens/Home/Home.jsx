import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
    const [Category,setCategory]= useState('All')
  return (
    <div>
        <Header/>
        <ExploreMenu category={Category} setCategory={setCategory}/>
        <FoodDisplay category={Category}/>
    </div>
  )
}

export default Home