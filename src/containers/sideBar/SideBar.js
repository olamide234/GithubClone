import React from 'react'
import './SideBar.css'
import {useNavigate} from "react-router-dom";
import { RiTwitterFill } from "react-icons/ri";
import { Icon } from "@iconify/react";
import dp from "../../assets/images/IMG_dp.jpg"
import status from "../../assets/images/icons8-goal-16.png"

{/* <Icon icon="codicon:mail" width="16" inline={true} /> */}
export default function SideBar() {
    let navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem('code')
        navigate('/login')
    }

    return (
        <div className="gh__sideBar">
            <div className="gh__sideBar-profile">
                <div className="gh__sideBar-profile__sticky d-none">
                    <div>
                        <span></span> {/* dp : to be completed later */}
                        <span></span>  {/*username : to be completed later */}
                    </div>
                </div>
                <div className="gh__sideBar-profile__editable">
                    <div className="gh__sideBar-profile__editable-dpUsername">
                        <div className="dp">
                            <a href="#">
                                <img className="profile_img widthFull" src={dp} alt="Avatar" width="260" height="260" style={{height:'auto'}}/>
                            </a>
                            <div className="userStatus__container">
                                <div className="userStatus__container-absolute">
                                    <div className="userStatus__container-absolute__b">
                                        <div className="userStatus__container-absolute__b-content widthFull">
                                            <div className="userStatus__container-absolute__b-content__emoji">
                                                <img className="status" src={status} alt="status"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="names">
                            <h1>
                                <span className="fullname">Olamide Tofade</span>
                                <span className="nickname">olamide234</span>
                            </h1>
                        </div>
                    </div>
                    <div className="gh__sideBar-profile__editable-followColumn">
                        <div className="gh__sideBar-profile__editable-followColumn__area">
                            <div className="gh__sideBar-profile__editable-followColumn__area-edit">
                                <button>Edit profile</button>
                            </div>
                        </div>
                        <div className="gh__sideBar-profile__editable-followColumn__desc">
                            <div className="gh__sideBar-profile__editable-followColumn__desc-comment">
                                <div>I'm an energetic Software Engineer with a knack for Frontend Engineering.</div>
                            </div>
                            <div className="gh__sideBar-profile__editable-followColumn__desc-follows">
                                <div>
                                    <a className="followers">
                                        <Icon className="people" icon="eva:people-outline" width="16" width="16" inline={true}/> 
                                        <span>21</span>
                                        follower
                                    </a>
                                    <span>.</span>
                                    <a className="followers">
                                        <span>18</span>
                                        following
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        <Icon className="location" icon="ci:location-outline" width="22" height="22" inline={true} />
                                        <span>Nigeria</span>
                                    </li>
                                    <li>
                                        <RiTwitterFill className="twitter" size={20}/>
                                        <span className="twiLink">@Dami_code</span>
                                    </li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="gh__sideBar-profile__editable-achievementsCol"></div>
                    <div className="gh__sideBar-profile__editable-organizationsCol"></div>
                    <button className="logoutBtn" onClick={onLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}
