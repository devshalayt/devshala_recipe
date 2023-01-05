import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs';

function RecipeLists() {
  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input type="text" placeholder='Search' />
                <button ><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            <div className='flexItem'>
                <div className='img-wrapper'>
                    <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                </div>
                <p>Pizza Recipe</p>
            </div>
            <div className='flexItem'>
                <div className='img-wrapper'>
                    <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                </div>
                <p>Pizza Recipe</p>
            </div>
            <div className='flexItem'>
                <div className='img-wrapper'>
                    <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                </div>
                <p>Pizza Recipe</p>
            </div>
            <div className='flexItem'>
                <div className='img-wrapper'>
                    <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                </div>
                <p>Pizza Recipe</p>
            </div>
        </div>
    </div>
  )
}

export default RecipeLists