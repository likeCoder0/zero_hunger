import React from 'react'
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div>
        <div class="bg-image3">
        </div>
      <div class="bg-text">
        <div>
          <h1>
          Feeling generous today? You can also help us financially to fund our cause....
          </h1>
        </div>
        <div>
          <Link to="/pay">
          <button class="button button1">UPI Link</button>
          </Link>
        </div>
       
      </div>
    </div>
  )
}

export default Page3;