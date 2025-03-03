import React, { useEffect } from 'react';
import "../contact/contact.scss";
import totoroImage from '../../assets/img/pngegg.png';
const ContactPage = () => {
  // Hàm tạo hạt tuyết bằng JavaScript
  useEffect(() => {
    const snowContainerBackground = document.querySelector('.snow-container-background');
    const snowContainerForeground = document.querySelector('.snow-container-foreground');
  
    const createSnowflake = (container) => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên theo chiều ngang
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Thời gian rơi ngẫu nhiên từ 5-10 giây
      snowflake.style.opacity = Math.random(); // Độ mờ ngẫu nhiên
      snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 3}px`; // Kích thước ngẫu nhiên từ 3-8px
      container.appendChild(snowflake);
  
      setTimeout(() => {
        snowflake.remove();
      }, 10000); // Xóa sau 10 giây
    };
  
    // Tạo hạt tuyết phía sau (background)
    for (let i = 0; i < 30; i++) {
      createSnowflake(snowContainerBackground);
    }
    const snowIntervalBackground = setInterval(() => createSnowflake(snowContainerBackground), 300);
  
    // Tạo hạt tuyết phía trước (foreground)
    for (let i = 0; i < 20; i++) {
      createSnowflake(snowContainerForeground);
    }
    const snowIntervalForeground = setInterval(() => createSnowflake(snowContainerForeground), 400);
  
    // Dọn dẹp interval khi component unmount
    return () => {
      clearInterval(snowIntervalBackground);
      clearInterval(snowIntervalForeground);
    };
  }, []);

  return (
    <div>
      {/* Phần Overview */}
      <div className="contact_container d-flex">
        <div className="overview_section">
          <div className='overview_box col-7'>
            <div className='introduce'>
              <span className="greeting">HELLO, I'M <h2 className="name">QUÂN</h2></span>
              <ul className='List_item'>
                <li className='item'>
                  <a href="#" target="_blank"><i className="bi bi-facebook icon icon-facebook"></i></a>
                </li>
                <li className='item'>
                  <a href="#" target="_blank"><i className="bi bi-instagram icon icon-instagram"></i></a>
                </li>
                <li className='item'>
                  <a href="#" target="_blank"><i className="bi bi-github icon icon-github"></i></a>
                </li>
                <li className='item'>
                  <a href="#" target="_blank"><i className="bi bi-envelope icon icon-envelope"></i></a>
                </li>
              </ul>
            </div>    
            <div className='contact_box'>
              <button className='btn_contact'>
                Contact
                <i className="bi bi-caret-right-fill icon_cont"></i>
              </button>  
            </div>  
          </div>
          <div className='box_img col-6'>
            <h4 className='career_box'>SOFTWARE DEVELOP</h4>
            <div className='backGround_img'>
              <img src="https://i.pinimg.com/736x/59/bb/c6/59bbc6461ac08b7d8918bab59fd87dfc.jpg" alt="" className='img_link' />
              <div className="small-circle-1"></div>
              <div className="small-circle-2"></div>
              <div className="small-circle-3"></div>
              <div className="small-circle-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần About Me với hiệu ứng tuyết rơi */}
      <div className="aboutme_section">
        <div className="snow-container snow-container-background"></div> {/* Tuyết phía sau */}
        <div className="aboutme_content">
          <div className="row">
            <div className='skill_box col-12 col-sm-6'>
              <h2>About Me</h2>
              <p>I am a passionate software developer with a love for anime and technology.</p>
              <ul className='skill_list'>
                <li className='skill_item'>
                  <i className="bi bi-database-fill-gear icon_skill"></i>
                </li>
                <li className='skill_item'>
                  <i className="bi bi-bootstrap-fill icon_skill"></i>
                </li>
                <li className='skill_item'>
                  <i className="bi bi-braces icon_skill"></i>
                </li>
              </ul>
            </div>
            <div className='img_about col-12 col-sm-6'>
              <div className="totoro_wrapper">
                <img src={totoroImage} alt="Totoro" className='img_totoro' />
              </div>
            </div>
          </div>
        </div>
        <div className="snow-container snow-container-foreground"></div> {/* Tuyết phía trước */}
      </div>

      {/* Phần Other */}
      <div className="contact_container d-flex">
        <div className="other_section">
          {/* Nội dung cho phần Other */}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;