import React, { useState } from "react"
import "./Register.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form"
import useInput from "../../hooks/useInput"
export default function Register() {
  const [firstNameData, setFirstNameData,nameReset] = useInput("")
  const [password, setPassword,passReset] = useInput("")
  const [emailData, setEmailData,emailReset] = useInput("")
  const [submitted, setSubmitted] = useState(false)
  const [allValid, setAllValid] = useState(false)

  function submitBtn(e) {
    e.preventDefault()
    setSubmitted(true)
    if (firstNameData && password && emailData) {
      setAllValid(true)
      setTimeout(() => {
        nameReset()
        passReset()
        emailReset()
        setAllValid(false)
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="form-container my-4">
      <div className="text-light text-center mb-5 mt-4">
        <h4>ثبت نام</h4>
      </div>
      <form className="register-form" autoComplete="off">
        {allValid && (
          <div className="success-message">ثبت نام شما با موفقیت انجام شد</div>
        )}
        <p>نام کاربری</p>
        <input
          placeholder="نام کاربری"
          id="first-name"
          className="form-field"
          type="text"
          {...setFirstNameData}
        />
        {submitted && !firstNameData && (
          <span>لطفا نام کاربری را وارد نمایید!</span>
        )}

        <p className="mt-3">ایمیل</p>
        <input
          placeholder="ایمیل"
          id="first-name"
          className="form-field"
          type="text"
          {...setEmailData}
        />
        {submitted && !emailData && <span>لطفا ایمیل خود را وارد نمایید!</span>}

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
          {...setPassword}
        />
        {submitted && !password && (
          <span id="first-name-error">لطفا رمز عبور را وارد نمایید!</span>
        )}

        <div className="d-flex mt-3">
          <input style={{cursor:'pointer'}} type="checkbox" className="ms-2 mb-2"/>
          <p style={{cursor:'pointer'}}>من با شرایط و ضوابط موافقم</p>
        </div>

        <button className="form-field" type="submit" onClick={submitBtn}>
          ثبت نام
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
          <p className="text-secondary">حساب دارید؟</p>
          <Link to="/login">وارد شوید</Link>
        </div>
      </div>
    </div>
  )
}
