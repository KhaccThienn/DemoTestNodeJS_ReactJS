import React, { useState } from 'react'
import * as PeopleServices from "../../../Services/PeopleService";
import { useNavigate } from 'react-router-dom';

function Add() {
  const initState = {
    name: "",
    birthday: "",
    avatar: "",
    province_id: ""
  };

  const [people, setPeople] = useState(initState);
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  const handleChangeFile = (e) => {
    setPreview(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeople({ ...people, [name]: value })
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", people.name)
    formData.append("birthday", people.birthday)
    formData.append("avatar", preview)
    formData.append("province_id", people.province_id);

    PeopleServices.postData(formData);
    navigate('/people');
  }
  return (
    <div className='container p-3'>
      <div className='row'>
        <div className="form-group col-lg-6">
          <label>Name</label>
          <input type="text" name="name" id="name" className="form-control" placeholder="Name" onChange={handleChange} />
        </div>
        <div className="form-group col-lg-6">
          <label>Birthday</label>
          <input type="date" name="birthday" id="birthday" className="form-control" onChange={handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className="form-group col-lg-6">
          <label>Avatar</label>
          <input type="file" name="avatar" id="avatar" className="form-control" onChange={handleChangeFile} />
          <div className='w-25'>
            {preview && <img src={URL.createObjectURL(preview)} alt="" className='card-img' />}
          </div>
        </div>
        <div className="form-group col-lg-6">
          <label>Province: </label>
          <input type="text" name="province_id" id="province_id" className="form-control" onChange={handleChange} />
        </div>
      </div>
      <button type='button' onClick={handleSubmit} className='btn btn-outline-success'>Submit</button>
    </div>
  )
}

export default Add