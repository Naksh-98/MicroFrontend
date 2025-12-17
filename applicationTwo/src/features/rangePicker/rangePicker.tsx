import React, {  useState } from 'react'
import { Slider } from '@mui/material';
import { setFilterRange } from '../product/productsSlice';
import { useDispatch } from 'react-redux';

const MIN_PRICE = 10;
const MAX_PRICE = 10000;

const RedirectionLinks = () => {
  const [price, setPrice] = useState<number[]>([MIN_PRICE, MAX_PRICE]);
  const [boxChecked, setBoxChecked] = useState<number[][]>([]);
  const dispatch = useDispatch();

  const handleChange = (event: Event, newValue: number[]) => {
    setPrice(newValue)
    dispatch(setFilterRange(newValue));
  }
  const boxClicked = (e: React.MouseEvent<HTMLInputElement>) => {
    let dataArray = [[10, 100], [100, 500], [500, MAX_PRICE]]
    const target = e.target as HTMLInputElement
    if (target.name === "priceone") {
      setPrice(dataArray[0])
      dispatch(setFilterRange(dataArray[0]));
      setBoxChecked([...boxChecked, dataArray[0]])
    } else if (target.name === "pricetwo") {
      setPrice(dataArray[1])
      dispatch(setFilterRange(dataArray[1]));
      setBoxChecked([...boxChecked, dataArray[1]])
    } else if (target.name === "pricethree") {
      setPrice(dataArray[2])
      dispatch(setFilterRange(dataArray[2]));
      setBoxChecked([...boxChecked, dataArray[2]])
    }
  }
  return (
    <>
      <div className='pricepicker'>
        <div className="pricepicker-inputs">
          <label>Max Price: {(price[0] + price[1]).toLocaleString()} </label>
          <div>
            <span>₹{price[0].toLocaleString()} – ₹{price[1].toLocaleString()}</span>
          </div>
          <Slider
            className='slider'
            value={price}
            min={MIN_PRICE}
            max={MAX_PRICE}
            onChange={handleChange}
            valueLabelDisplay="off"
            disableSwap
          />
        </div>
        <h1>Price Range</h1>
        <div className='checkbox'>
          <div>
            <label htmlFor="priceone">10 - 100</label>
          </div>
          <div>  <input
            type="checkbox"
            name='priceone'
            value={price.join(",")}
            onClick={(e) => { boxClicked(e) }}
            checked={
              JSON.stringify(boxChecked[0]) === JSON.stringify(price) ? true : false
            }
          /></div>
          <div>
            <label htmlFor="pricetwo">100 - 500</label>
          </div>
          <div>  <input
            type="checkbox"
            name='pricetwo'
            onClick={(e) => { boxClicked(e) }}
            onBlur={() => console.log("second blur")}
            checked={
              JSON.stringify(boxChecked[1]) === JSON.stringify(price) ? true : false
            }
          /></div>
          <div>
            <label htmlFor="pricethree">500 - 100000+</label>
          </div>
          <div> <input
            type="checkbox"
            name='pricethree'
            onClick={(e) => { boxClicked(e) }}
            checked={
              JSON.stringify(boxChecked[2]) === JSON.stringify(price) ? true : false
            }
          /></div>
        </div>
      </div>
    </>

  )
}

export default RedirectionLinks