import React, { useState } from "react"
import "./Login.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import { Link } from "react-router-dom"

export default function Login() {
  const [firstNameData, setFirstNameData] = useState("")
  const [password, setPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [allValid, setAllValid] = useState(false)

  function submitBtn(e) {
    e.preventDefault()
    setSubmitted(true)
    if (firstNameData && password) {
      setAllValid(true)
   
      setTimeout(() => {
        setFirstNameData("")
        setPassword("")
        setAllValid(false)
        setSubmitted(false)
      }, 3000)
    }
  }

  function firstNameHandler(e) {
    setFirstNameData(e.nativeEvent.target.value)
  }

  function passHandler(e) {
    setPassword(e.nativeEvent.target.value)
  }

  return (
    <div className="form-container my-4">
      <div className="text-light text-center mb-5 mt-4">
        <h4>ورودی</h4>
        <p className="text-secondary fw-bold">
          برای ادامه به حساب کاربری خود وارد شوید
        </p>
      </div>
      <form className="register-form" autoComplete="off">
        {allValid && (
          <div className="success-message">
           شما با موفقیت وارد حساب کاربری خود شدید.
          </div>
        )}
        <p>نام کاربری</p>
        <input
        placeholder="hanieGhorbani"
          id="first-name"
          className="form-field"
          type="text"
          value={firstNameData}
          onChange={firstNameHandler}
          
        />
        {submitted && !firstNameData && (
          <span>لطفا نام کاربری را وارد نمایید!</span>
        )}
        <div className="d-flex justify-content-between align-items-center w-100 mt-3">
          <p>رمز عبور</p>
          <p style={{ cursor: "pointer", fontSize: "13px" }}>
            رمز عبور را فراموش کرده اید؟
          </p>
        </div>

        <input
          placeholder="رمز عبور"
          id="pass"
          className="form-field"
          type="password"
          value={password}
          onChange={passHandler}
        />
        {submitted && !password && (
          <span>لطفا رمز عبور را وارد نمایید!</span>
        )}
        
        <button className="form-field" type="submit" onClick={submitBtn}>
       ورود
        </button>
      </form>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="text-secondary my-4">یا</p>

        <div>
          <button className="btn btn-outline-secondary ms-2">
            <GitHubIcon />
            گیت هاب
          </button>
          <button className="btn btn-outline-secondary me-2">
            <FacebookOutlinedIcon />
            فیسبوک
          </button>
        </div>

        <div className="d-flex mt-4">
          <p className="text-secondary">حساب ندارید؟</p>
          <Link to='/register'>یک حساب کاربری ایجاد کنید</Link>
        </div>
      </div>
    </div>
  )
}
