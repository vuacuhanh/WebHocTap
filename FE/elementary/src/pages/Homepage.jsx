
import {useState, React} from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
const HomePage = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedSubject, setSelectedSubject] = useState("Toán");
  const years = [2021, 2022, 2023, 2024, 2025];
  const subjects = ["Toán", "Tiếng Việt", "Khoa học", "Lịch sử", "Địa lý", "Đạo đức"];
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <div className="container position-relative" >
          <div className="row gy-5">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2>Xin chào, hôm nay bạn muốn làm gì ?</h2>
              <p>Nơi thắp sáng tri thức, chắp cánh ước mơ cho tất cả những người đẹp</p>
              <div className="d-flex">
                <a href="#about" className="btn-get-started">Get Started</a>
                <a href="" className="glightbox btn-watch-video d-flex align-items-center">
                  <i className="bi bi-play-circle"></i><span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="https://nqhtutor.edu.vn/upload/assets/fm/20221220/nvnw-4-ly-do-khien-ket-qua-hoc-tap-luon-khong-dat-nhu-mong-muon.jpg" className="img-fluid" alt="Hero" />
            </div>
          </div>
        </div>

        <div className="icon-boxes position-relative" >
          <div className="container position-relative">
            <div className="row gy-4 mt-3">
              {[
                { icon: "bi bi-easel", title: "Máy tính",path:"/may-tinh" },
                { icon: "bi bi-pencil-fill", title: "Chính tả", path:"/chinh-ta" },
                { icon: "bi bi-book", title: "Giải bài tập", path:"/giai-bai-tap" },
                { icon: "bi bi-translate", title: "Dịch", path:"/dich" },
                { icon: "bi bi-command", title: "Đổi đơn vị", path:"/doi-don-vi" },
                { icon: "bi bi-command", title: "Từ điển tiếng anh", path:"/tu-dien" },
              ].map((box, index) => (
                <div className="col-xl-2 col-md-3" key={index}>
                  <div className="icon-box">
                    <div className="icon"><i className={box.icon}></i></div>
                    <h4 className="title"><Link to = {box.path} className="stretched-link">{box.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="select-subjects" className="py-4">
      <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-green-600 text-center mb-2">Tài liệu môn học</h3>
        <div className="flex flex-wrap gap-4 search-sub">
          <select
            className="p-2 year-sub"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select
            className="p-2 subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <button className="px-4 py-2 btn-search">
            <FaSearch className="mr-2" /> Tìm kiếm
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="p-4 bg-white item-prac">
              <span className="text-gray-700">Đề thi {selectedYear} Môn {selectedSubject} - Đề {index + 1}</span>
              <span className="text-green-500">&gt;</span>
            </div>
          ))}
        </div>
        <div className="mt-6 page-sub">
          {[1, 2, 3, 4, 5, "...", 100].map((num, index) => (
            <button key={index} className="px-3 py-1 btn-page-sub">
              {num}
            </button>
          ))}
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container section-title" >
          <h2>Services</h2>
          <div><span>Check Our</span> <span className="description-title">Services</span></div>
        </div>

        <div className="container">
          <div className="row gy-4">
            {[
              { icon: "bi bi-activity", title: "Nesciunt Mete", description: "Provident nihil minus qui consequatur non omnis maiores." },
              { icon: "bi bi-broadcast", title: "Eosle Commodi", description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint." },
              { icon: "bi bi-easel", title: "Ledo Markt", description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur." },
              { icon: "bi bi-bounding-box-circles", title: "Asperiores Commodit", description: "Non et temporibus minus omnis sed dolor esse consequatur." },
              { icon: "bi bi-calendar4-week", title: "Velit Doloremque", description: "Cumque et suscipit saepe. Est maiores autem enim facilis." },
              { icon: "bi bi-chat-square-text", title: "Dolori Architecto", description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque." },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index} >
                <div className="service-item position-relative">
                  <div className="icon"><i className={service.icon}></i></div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing section">
        <div className="container section-title" >
          <h2>Pricing</h2>
          <div>
            <span>Check Our</span> <span className="description-title">Pricing</span>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="pricing-tem">
                <h3 style={{ color: '#20c997' }}>Free Plan</h3>
                <div className="price">
                  <sup>$</sup>0<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-box" style={{ color: '#20c997' }}></i>
                </div>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="na">Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" >
              <div className="pricing-tem">
                <span className="featured">Featured</span>
                <h3 style={{ color: '#0dcaf0' }}>Starter Plan</h3>
                <div className="price">
                  <sup>$</sup>19<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-send" style={{ color: '#0dcaf0' }}></i>
                </div>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li className="na">Massa ultricies mi</li>
                </ul>
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" >
              <div className="pricing-tem">
                <h3 style={{ color: '#fd7e14' }}>Business Plan</h3>
                <div className="price">
                  <sup>$</sup>29<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-airplane" style={{ color: '#fd7e14' }}></i>
                </div>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="pricing-tem">
                <h3 style={{ color: '#0d6efd' }}>Ultimate Plan</h3>
                <div className="price">
                  <sup>$</sup>49<span> / mo</span>
                </div>
                <div className="icon">
                  <i className="bi bi-rocket" style={{ color: '#0d6efd' }}></i>
                </div>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="content px-xl-5">
                <h3>
                  <span>Frequently Asked </span>
                  <strong>Questions</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="faq-container">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className={`faq-item ${index === 0 ? 'faq-active' : ''}`} key={index}>
                    <h3>
                      <span className="num">{item}.</span> <span>FAQ question {item}?</span>
                    </h3>
                    <div className="faq-content">
                      <p>Content for FAQ {item}.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container section-title" >
          <h2>Contact</h2>
          <div>
            <span>Need Help?</span> <span className="description-title">Contact Us</span>
          </div>
        </div>

        <div className="container" >
          <div className="row gy-4">
            <div className="col-lg-4">
              {[
                { icon: 'geo-alt', title: 'Address', content: 'A108 Adam Street, New York, NY 535022' },
                { icon: 'telephone', title: 'Call Us', content: '+1 5589 55488 55' },
                { icon: 'envelope', title: 'Email Us', content: 'info@example.com' },
              ].map((info, index) => (
                <div className="info-item d-flex">
                  <i className={`bi bi-${info.icon} flex-shrink-0`}></i>
                  <div>
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-8">
              <form action="forms/contact.php" method="post" className="php-email-form" >
                <div className="row gy-4">
                  {[
                    { type: 'text', name: 'name', placeholder: 'Your Name' },
                    { type: 'email', name: 'email', placeholder: 'Your Email' },
                    { type: 'text', name: 'subject', placeholder: 'Subject' },
                  ].map((field, index) => (
                    <div className={`col-md-${index === 2 ? 12 : 6}`} key={index}>
                      <input
                        type={field.type}
                        name={field.name}
                        className="form-control"
                        placeholder={field.placeholder}
                        required
                      />
                    </div>
                  ))}

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;