import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { RiLogoutBoxFill } from 'react-icons/ri'
import { IoReturnUpBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import { useAuth } from '../../../providers/useAuth'
import cls from './Profile.module.scss'
import { changeAva, handleSignOut } from '../../../firebase/firebase'
import { storage } from '../../../App.js'
import { API } from '../../../configs/api'


const ProfileCard = () => {
  const [ active, setActive ] = React.useState(false)
  const [ title, setTitle ] = React.useState('')
  const [ url, setUrl ] = React.useState('' || null)
  const [ file, setFile ] = React.useState(null)

  const { users } = useAuth()


  const [HEX, setHEX] = useState('')
  const navigate = useNavigate()

  useEffect(() => {

    const randomColor = '#' + Math.random().toString(16).slice(2, 8)

    setHEX(randomColor)
    if (!users) return navigate('/')
  }, [])


  const sign = () => {
    users && handleSignOut()  
    users && window.location.reload()  
  }

  const uploading = () => {	
    console.log(file.type);
    const storageRef = ref(storage, `avatars/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed",
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          changeAva(users.email, downloadURL)
        });
      })
      
      setActive(true)
      setTimeout(() => {
        setActive(false)
        navigate('/')
      }, [50000])
      
    }
  const openFile = (e) => {
    let reader = new FileReader();
    reader.onload = () => {
      let dataURL = reader.result;
      setUrl(dataURL)
    };
    reader.readAsDataURL(e);
  };

  return (
    <div>
      <div className={cls.container}>
        <div className={cls.profile}>
          <div className={cls.profile_info}>
            <div
              className={cls.profile_img}
              style={users && !users.photo
                ? { backgroundColor: HEX }
                : { backgroundColor: 'none' }
              }
            >
              <input 
                type="file" 
                id='photo_upload' 
                onChange={e => {
                  openFile(e.target.files[0])
                  uploading(e.target.files[0])
                }}
              />
              {
                users && users.photo
                  ? 
                  <label htmlFor="photo_upload">
                    <img 
                      src={url ? url : users.photo} 
                      alt="avatar" 
                    />
                  </label>
                  : 
                  <p>{users && !users.photo && users.name[0]} </p>
              }
            </div>
            <ul className={cls.list}>
              <li>
                <FaUser />
                {users ? users.name : 'Нет имени'}
              </li>
              <li>
                <FaEnvelope />
                {users ? users.email : 'Нет почты'}
              </li>
            </ul>
          </div>
          <Link to={'/saved'} className={cls.saved}>
            <span>
              <BsFillBookmarkFill />
              Cохраненные
            </span>
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link>
          <button
            className={cls.btn}
            onClick={() => sign()}
          >
            <span>
              <p><RiLogoutBoxFill /></p>
              Выйти c аккаунта
            </span>
          </button>
          <Link to={'/'} className={cls.back}>
            <span>
              <IoReturnUpBack />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
