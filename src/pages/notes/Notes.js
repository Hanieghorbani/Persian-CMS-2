import React from "react"
import { notesData } from "../../datas"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined"
import StarIcon from "@mui/icons-material/Star"
import "./Notes.css"
import { useState } from "react"
export default function Notes() {
  const [showModalAddNote, setShowModalAddNote] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [notes, setNotes] = useState(notesData)
  const [star, setStar] = useState(false)
  const [status, setStatus] = useState("همه یادداشت ها")
  function titleHand(e) {
    setTitle(e.target.value)
  }
  function contentHand(e) {
    setContent(e.target.value)
  }

  function cancelBtn() {
    setShowModalAddNote(false)
    setContent("")
    setTitle("")
  }

  function addNoteHandler() {
    let objDate = new Date()
    const newNote = {
      id: notes.length + 1,
      star: false,
      title,
      body: content,
      date: `${objDate.getFullYear()}/${
        objDate.getMonth() + 1
      }/${objDate.getDate()}`,
    }

    setNotes((prev) => [...prev, newNote])
    setShowModalAddNote(false)
    setTitle("")
    setContent("")
  }

  function removeHand(noteId) {
    console.log(noteId)
    let filterNotes = notes.filter((note) => {
      return note.id != noteId
    })
    setNotes(filterNotes)
  }

  function starHand(noteId) {
    let newListNotes = []
    notes.forEach((note) => {
      if (note.id == noteId) {
        newListNotes.push({
          id: note.id,
          title: note.title,
          body: note.body,
          date: note.date,
          star: true,
        })
      } else {
        newListNotes.push(note)
      }
    })
    setNotes(newListNotes)
  }
  function unStarHand(noteId) {
    let newListNotes = []
    notes.forEach((note) => {
      if (note.id == noteId) {
        newListNotes.push({
          id: note.id,
          title: note.title,
          body: note.body,
          date: note.date,
          star: false,
        })
      } else {
        newListNotes.push(note)
      }
    })
    setNotes(newListNotes)
  }
  return (
    <div className="w-100 d-flex ms-3 justify-content-between">
      <div className="bgMain rounded pt-3 d-flex flex-column w-25">
        <div className="d-flex flex-column">
          <button
            className="btn btn-primary mx-auto text-white mb-4"
            onClick={() => setShowModalAddNote(true)}
          >
            افزودن
          </button>
          <ul className=" list-unstyled text-secondary">
            <li onClick={() => setStatus("همه یادداشت ها")}>
              <DriveFileRenameOutlineOutlinedIcon />
              همه یادداشت ها
            </li>
            <li className="mt-3" onClick={() => setStatus("علاقه مندی")}>
              <StarBorderIcon />
              علاقه مندی
            </li>
          </ul>
        </div>
        <div className="inputsBox">
          <Modal show={showModalAddNote}>
            <Modal.Header
              closeButton
              onClick={() => setShowModalAddNote(false)}
            ></Modal.Header>
            <Modal.Body dir="rtl">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    placeholder="عنوان"
                    autoFocus
                    value={title}
                    onChange={titleHand}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="توضیحات"
                    value={content}
                    onChange={contentHand}
                    maxLength={50}
                    required
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cancelBtn}>
                نادیده گرفتن
              </Button>
              <Button variant="primary" onClick={addNoteHandler}>
                افزودن
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="row notes w-75 mt-3">
        {status == "همه یادداشت ها" &&
          notes.map((note) => (
            <div key={note.id} className="col-3">
              <div className="w-100 rounded bgMain text-white">
                <h6 className="p-4 pb-1">{note.title}</h6>
                <span className="text-secondary px-4">{note.date}</span>
                <p className="text-secondary mt-4 px-4">{note.body}</p>
                <div className="d-flex actions rounded w-100 p-3">
                  {note.star ? (
                    <StarIcon
                      className="ms-2"
                      onClick={() => unStarHand(note.id)}
                    />
                  ) : (
                    <StarBorderIcon
                      className="ms-2"
                      onClick={() => starHand(note.id)}
                    />
                  )}

                  <DeleteOutlinedIcon onClick={() => removeHand(note.id)} />
                </div>
              </div>
            </div>
          ))}

        {status == "علاقه مندی" &&
          notes
            .filter((note) => note.star)
            .map((note) => (
              <div key={note.id} className="col-3">
                <div className="w-100 rounded bgMain text-white">
                  <h6 className="p-4 pb-1">{note.title}</h6>
                  <span className="px-4">{note.date}</span>
                  <p className="mt-4 px-4">{note.body}</p>
                  <div className="d-flex actions rounded w-100 p-3">
                    {note.star ? (
                      <StarIcon
                        className="ms-2"
                        onClick={() => unStarHand(note.id)}
                      />
                    ) : (
                      <StarBorderIcon
                        className="ms-2"
                        onClick={() => starHand(note.id)}
                      />
                    )}

                    <DeleteOutlinedIcon onClick={() => removeHand(note.id)} />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
