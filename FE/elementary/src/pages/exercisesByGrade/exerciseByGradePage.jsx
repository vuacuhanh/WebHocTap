import React from "react";
import { useParams } from "react-router-dom";
import "../exercisesByGrade/exBG.css";

const ExerciseByGradePage = () => {
  const { grade } = useParams(); // Lấy giá trị `grade` từ URL

  // Dữ liệu mẫu cho các môn học và bài tập
  const subjects = [
    {
      name: "Đạo đức",
      materials: [
        { title: "VBT Đạo Đức 1", path: `/giai-bai-tap/lop-${grade}/Đạo đức/VBT Đạo Đức 1` },
        { title: "Giáo án Đạo Đức 1 Cánh diều", path: `/giai-bai-tap/lop-${grade}/Đạo đức/Giáo án Đạo Đức 1 Cánh diều` },
      ],
    },
    {
      name: "Toán",
      materials: [
        { title: "Lý thuyết Toán 1", path: `/giai-bai-tap/lop-${grade}/Toán/Lý thuyết Toán 1` },
        { title: "SGK Toán 1", path: `/giai-bai-tap/lop-${grade}/Toán/SGK Toán 1` },
        { title: "VBT Toán 1 - Cánh diều", path: `/giai-bai-tap/lop-${grade}/Toán/VBT Toán 1 - Cánh diều` },
      ],
    },
    {
      name: "Tiếng Việt",
      materials: [
        { title: "VBT Tiếng Việt 1", path: `/giai-bai-tap/lop-${grade}/Tiếng Việt/VBT Tiếng Việt 1` },
        { title: "Bài tập cuối tuần Tiếng Việt 1 Cánh diều", path: `/giai-bai-tap/lop-${grade}/Tiếng Việt/Bài tập cuối tuần Tiếng Việt 1 Cánh diều` },
      ],
    },
  ];

  return (
    <div className="grade-container">
      <h1 className="grade-title">Bài tập lớp {grade}</h1>

      {/* Danh sách môn học */}
      <div>
        {subjects.map((subject) => (
          <div key={subject.name} className="subject-container">
            <h2 className="subject-title">{subject.name}</h2>
            <div className="material-list">
              {subject.materials.map((material) => (
                <a key={material.title} href={material.path} className="material-link">
                  {material.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseByGradePage;