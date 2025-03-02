import React from 'react';
import { Link } from 'react-router-dom';
import "../profileInformation/profile.css";

const ProfileIInPage = () => {
    const name = ["Thái Hoàng Quân"];
    const birthDay = ["30/3/2003"];

    return (
        <div className='container-profile'>
            <div className='setting'>
                <button className='btn_change'>
                    <span className="icon_wrapper">
                        <i className="bi bi-gear-fill icon_setting"></i>
                    </span>
                    Cài đặt
                </button>
            </div>
            <div className='main_box d-flex'>
                <div className='img_box col-4'>
                    <img
                        src="https://smilemedia.vn/wp-content/uploads/2022/08/Concept-chup-anh-ca-nhan-theo-ca-tinh.jpg"
                        alt="Profile"
                        className='img_link'
                    />
                </div>
                <div className='main_information col-8'>
                    <h4>Họ và tên:</h4>
                    {name.map((fullName) => (
                        <Link key={fullName} to="/" className='name_user'>
                            {fullName}
                        </Link>
                    ))}
                    <h4>Ngày sinh:</h4>
                    {birthDay.map((birth) => (
                        <Link key={birth} to="/" className='birthDay_user'>
                            {birth}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileIInPage;