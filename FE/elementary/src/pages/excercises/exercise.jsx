import { useState } from "react";
import { Link } from "react-router-dom";
import "../excercises/ex.css";

const ExercisePage = () => {
  const grades = [
    { name: "Lớp 1", path: "/bai-tap/lop-1" },
    { name: "Lớp 2", path: "/bai-tap/lop-2" },
    { name: "Lớp 3", path: "/bai-tap/lop-3" },
    { name: "Lớp 4", path: "/bai-tap/lop-4" },
    { name: "Lớp 5", path: "/bai-tap/lop-5" },
  ];

  const subjects = [
    {
      name: "Đạo đức",
      materials: [
        { title: "VBT Đạo Đức 1", path: "/giai-bai-tap/lop-1/Đạo đức/VBT Đạo Đức 1" },
        { title: "Giáo án Đạo Đức 1 Cánh diều", path: "/giai-bai-tap/lop-1/Đạo đức/Giáo án Đạo Đức 1 Cánh diều" },
      ],
    },
    {
      name: "Toán",
      materials: [
        { title: "Lý thuyết Toán 1", path: "/giai-bai-tap/lop-1/Toán/Lý thuyết Toán 1" },
        { title: "SGK Toán 1", path: "/giai-bai-tap/lop-1/Toán/SGK Toán 1" },
        { title: "VBT Toán 1 - Cánh diều", path: "/giai-bai-tap/lop-1/Toán/VBT Toán 1 - Cánh diều" },
      ],
    },
    {
      name: "Tiếng Việt",
      materials: [
        { title: "VBT Tiếng Việt 1", path: "/giai-bai-tap/lop-1/Tiếng Việt/VBT Tiếng Việt 1" },
        { title: "Bài tập cuối tuần Tiếng Việt 1 Cánh diều", path: "/giai-bai-tap/lop-1/Tiếng Việt/Bài tập cuối tuần Tiếng Việt 1 Cánh diều" },
      ],
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="exercise-container">
      {/* Thanh điều hướng lớp học */}
      <div className="grade-nav">
        {grades.map((grade) => (
          <Link key={grade.name} to={grade.path} className="grade-link">
            {grade.name}
          </Link>
        ))}
      </div>
      <div className="main-sub">
        {/* Danh sách môn học chia thành 2 cột */}
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div key={subject.name} className="subject-container">
              <h2 className="subject-title">{subject.name}</h2>
              <div className="material-list">
                {subject.materials.map((material) => (
                  <Link key={material.title} to={material.path} className="material-link">
                    {material.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Phần "Khám phá thêm" */}
      <div className="explore-section">
        <h2 className="explore-title">Khám phá thêm</h2>
        <p className="explore-text">Các lựa chọn giải trí, tin tức và hơn thế nữa!</p>
        <a
          href="https://coccoc.com/search"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-button"
        >
          Tìm ngay trên Cốc Cốc
        </a>
      </div>
    </div>
  );
};

export default ExercisePage;