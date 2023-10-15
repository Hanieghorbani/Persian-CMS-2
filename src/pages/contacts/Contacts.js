import React from "react"
import "./Contacts.css"
import SearchBox from "../../components/searchBox/SearchBox"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined"
import { contactsDatas } from "../../datas"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { func } from "prop-types"

export default function Contacts() {
  const [showModalAddUser, setShowModalAddUser] = useState(false)
  const [showModalEditUser, setShowModalEditUser] = useState(false)
  const [name, setName] = useState("")
  const [pos, setPos] = useState("")
  const [email, setEmail] = useState("")
  const [addr, setAddr] = useState("")
  const [phone, setPhone] = useState("")
  const [ID, setID] = useState("")
  const [contacts, setContacts] = useState(contactsDatas)

  function addUserHandler() {
    if (name && pos && email && phone && addr) {
      const newContact = {
        id: contacts.length + 1,
        name,
        pos,
        email,
        phone,
        addr,
      }
      setContacts((prev) => [...prev, newContact])
      cancleBtn()
    }
  }

  function removeUserHandler(userId) {
    let filteredContact = contacts.filter((contact) => {
      return contact.id != userId
    })

    setContacts(filteredContact)
  }

  function editHand(userId) {
    let userEdit = contacts.find((contact) => contact.id == userId)
    setID(userId)
    setName(userEdit.name)
    setEmail(userEdit.email)
    setPos(userEdit.pos)
    setAddr(userEdit.addr)
    setPhone(userEdit.phone)
    setShowModalEditUser(true)
  }

  function editUserBtn() {
    let editUsers = []
    contacts.forEach((user) => {
      if (name && pos && email && phone && addr) {
        if (user.id == ID) {
          editUsers.push({
            id: contacts.id,
            name,
            email,
            pos,
            addr,
            phone,
          })
        } else {
          editUsers.push(user)
        }
        setContacts(editUsers)
        setShowModalEditUser(false)
      }
    })
  }

  function cancleBtn() {
    setAddr("")
    setPhone("")
    setEmail("")
    setPos("")
    setName("")
    setShowModalAddUser(false)
    setShowModalEditUser(false)
  }
  return (
    <div className="contacts mt-4 w-100 p-4">
      <div className="d-flex justify-content-between contactsTop w-100">
        <SearchBox />
        <div className="d-flex">
          <PersonAddIcon
            className="ms-3"
            onClick={() => {
              cancleBtn()
              setShowModalAddUser(true)
            }}
          />
          <FormatListBulletedOutlinedIcon className="ms-1" />
          <GridViewOutlinedIcon />
        </div>
      </div>
      <div className="text-white mt-5">
        <div className="d-flex justify-content-between bgMain rounded py-2 px-4 align-items-center fw-bold">
          <p>نام</p>
          <p>ایمیل</p>
          <p>آدرس</p>
          <p>موبایل</p>
          <p>ادیت</p>
        </div>

        <div>
          {contacts.map((contact) => (
            <div className="infoContacts d-flex justify-content-between bgMain my-3 rounded  align-items-center px-4 py-2">
              <div className="d-flex align-items-center">
                {/* <img src="/imgs/prof.jpg" className="rounded-circle"/> */}
                <div>
                  <h6>{contact.name}</h6>
                  <p className="text-secondary">{contact.pos}</p>
                </div>
              </div>

              <p className="text-secondary">{contact.email}</p>
              <p>{contact.addr}</p>
              <p className="text-secondary">{contact.phone}</p>

              <div className="d-flex">
                <EditRoundedIcon
                  className="ms-2"
                  onClick={() => editHand(contact.id)}
                />
                <PersonRemoveOutlinedIcon
                  onClick={() => removeUserHandler(contact.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal for add. */}
      <Modal show={showModalAddUser}>
        <Modal.Header
          closeButton
          onClick={() => setShowModalAddUser(false)}
        ></Modal.Header>
        <Modal.Body dir="rtl">
          <Form>
            <div className="row">
              <div className="col-6">
                <Form.Control
                  placeholder="نام"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-3"
                  required
                />
              </div>
              <div className="col-6">
                <Form.Control
                  className="mb-3"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Form.Control
                  placeholder="شغل"
                  autoFocus
                  value={pos}
                  onChange={(e) => setPos(e.target.value)}
                  className="mb-3"
                  required
                />
              </div>
              <div className="col-6">
                <Form.Control
                  className="mb-3"
                  placeholder="موبایل"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                {" "}
                <Form.Control
                  className="mb-3"
                  placeholder="آدرس"
                  value={addr}
                  onChange={(e) => setAddr(e.target.value)}
                  required
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancleBtn}>
            نادیده گرفتن
          </Button>
          <Button variant="primary" onClick={addUserHandler}>
            افزودن
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal for edit */}
      <Modal show={showModalEditUser}>
        <Modal.Header
          closeButton
          onClick={() => setShowModalEditUser(false)}
        ></Modal.Header>
        <Modal.Body dir="rtl">
          <Form>
            <div className="row">
              <div className="col-6">
                <Form.Control
                  placeholder="نام"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-3"
                  required
                />
              </div>
              <div className="col-6">
                <Form.Control
                  className="mb-3"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Form.Control
                  placeholder="شغل"
                  autoFocus
                  value={pos}
                  onChange={(e) => setPos(e.target.value)}
                  className="mb-3"
                  required
                />
              </div>
              <div className="col-6">
                <Form.Control
                  className="mb-3"
                  placeholder="موبایل"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Form.Control
                  className="mb-3"
                  placeholder="آدرس"
                  value={addr}
                  onChange={(e) => setAddr(e.target.value)}
                  required
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancleBtn}>
            نادیده گرفتن
          </Button>
          <Button variant="primary" onClick={editUserBtn}>
            ذخیره
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
