import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

const Content = () => {
  return (
    <>
    <div class="content">
        
        <div className='textContain'>
            <p>
            We Indians love to eat as well as feed others. For this very reason, every time we have a function or a party, we ensure that there’s plenty of food around. After all the eating, drinking, and merriment, we often end up with a lot of leftover food. While some of it can be packed off to friends and relatives, most of it goes to waste. Often, after a big party at home is over, we wonder what to do with the food.
            </p>
            <div><Link to="/page1">
          <button class="button button1">Donate <AiOutlineArrowRight/></button>
          </Link>
        </div>
        </div>
    </div>
    <div>
        <h3>Let's take a bite out of hunger!!</h3>
    </div>
    </>
  )
}

export default Content;