import React, { useState } from "react";
import axios from "axios";
import "../spell/spell.css";

const SpellingPage = () => {
  const [text, setText] = useState(""); // Văn bản nhập vào
  const [result, setResult] = useState(""); // Kết quả AI sửa
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // Sử dụng API Key của OpenAI

  const handleCheck = async () => {
    if (!text || text.trim().length === 0) {
      setResult("Vui lòng nhập văn bản để kiểm tra.");
      return;
    }
    if (text.length > 1000) {
      setResult("Văn bản quá dài. Vui lòng nhập ít hơn 1000 ký tự.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // Hoặc "gpt-4" nếu bạn có quyền truy cập
          messages: [
            {
              role: "system",
              content:
                "Bạn là một giáo viên dạy viết văn. Hãy sửa lỗi và đề xuất thay thế từ ngữ nào cho hay hơn.",
            },
            { role: "user", content: text },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      if (response.data?.choices?.[0]?.message?.content) {
        setResult(response.data.choices[0].message.content);
      } else {
        setResult("Không nhận được phản hồi hợp lệ từ AI.");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      if (error.response?.status === 429) {
        setResult("Hệ thống đang bận. Vui lòng thử lại sau 5 giây.");
        // Thử lại sau 5 giây
        setTimeout(() => {
          handleCheck();
        }, 5000);
      } else {
        setResult(
          error.response?.data?.error?.message || "Có lỗi xảy ra, vui lòng thử lại."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 container-sp">
      <h2 className="text-xl text_check">Trình kiểm tra và cải thiện bài viết</h2>
      <div className="">
        <textarea
          className="col-12 h-40 p-2 mt-2 text-spell"
          placeholder="Nhập bài viết của bạn..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
        />
        <div className="check-word">
          <button className="btn-check-result" onClick={handleCheck} disabled={loading}>
            {loading ? "Đang kiểm tra..." : "Kiểm tra bài viết"}
          </button>
        </div>

        {result && (
          <div className="col-12 mt-4 p-2 recommen-ai">
            <h3 className="font-semibold">Gợi ý từ AI:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpellingPage;