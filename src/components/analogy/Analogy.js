import React from 'react'
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import './Analogy.css'
export default function Analogy(props) {
  return (
    <div className='barChart p-4 rounded'>
        <h6 className="mb-5 text-white">{props.title}</h6>
          <div className="d-flex align-items-center">
            <ShoppingBagIcon className="bagIcon" />
            <div className="w-100 me-3">
              <div className="d-flex justify-content-between align-items-center w-100 text-secondary fw-bold">
                <p>{props.key1}</p>
                <p>{props.value1}</p>
              </div>
              <div className="bg-dark w-100 rounded-pill">
                <div className="gradientBoxIncome w-75 rounded-pill"></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center my-4">
            <LocalOfferIcon className="tagIcon bg-gradient" />
            <div className="w-100 me-3">
              <div className="d-flex justify-content-between align-items-center w-100 text-secondary fw-bold">
                <p>{props.key2}</p>
                <p>{props.value2}</p>
              </div>
              <div className="bg-dark w-100 rounded-pill">
                <div className="gradientBoxProfit w-25 rounded-pill"></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <CreditCardIcon className="cartIcon bg-gradient" />
            <div className="w-100 me-3">
              <div className="d-flex justify-content-between align-items-center w-100 text-secondary fw-bold">
                <p>{props.key3}</p>
                <p>{props.value3} </p>
              </div>
              <div className="bg-dark w-100 rounded-pill">
                <div className="gradientBoxCosts w-50 rounded-pill"></div>
              </div>
            </div>
          </div>
    </div>
  )
}
