import React,{useState} from 'react'
const data=require("./mockData.json")
function Shops(){
  const initialCount=0
  const [count,setCount]=useState(initialCount)
  
  return(
    <div>
    {data.map(data => {
        return (
          <div>
            <h4>BrandName:{data.Brandname}</h4>
            <div>productname:{data.Productname}</div>
            <button type="button" class="btn btn-success">
              ADD CART
            </button>
            <br />
            <br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
              +
            </button>
            {count}
            <button onClick={() => setCount(prevCount => prevCount - 1)}>
              -
            </button>
          </div>
        );
      })}
    </div>
  )
}
export default Shops