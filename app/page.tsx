"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "020-1-8937-815";

  const copyAccountNumber = async () => {
    try {
      // ลองใช้ Clipboard API ก่อน
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // fallback สำหรับเบราว์เซอร์เก่าหรือมือถือ
        const textArea = document.createElement("textarea");
        textArea.value = accountNumber;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* เกี่ยวกับมูลนิธิ */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
            ร่วมบริจาคเพื่อการศึกษาและพัฒนาสังคม
          </h2>
          <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed px-2">
            มูลนิธิอัลอามานะห์ เพื่อการศึกษาและสังคม มุ่งมั่นสนับสนุนการศึกษา 
            และพัฒนาคุณภาพชีวิตของชุมชนในจังหวัดสุราษฎร์ธานี
            <br />
            การบริจาคของท่านจะนำไปสู่การเปลี่ยนแปลงที่ยั่งยืนในสังคม
          </p>
        </section>

        {/* ช่องทางบริจาค */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            ช่องทางการบริจาค
          </h2>
          
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-400 rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-4 bg-emerald-600 text-white py-2 px-3 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="text-base sm:text-lg font-bold">โอนเงินผ่านธนาคาร</h3>
              </div>
              <div className="space-y-2.5 sm:space-y-3 text-gray-700">
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600 block sm:inline">ธนาคาร:</span> 
                  <span className="font-semibold text-gray-900 block sm:inline sm:ml-1">ธ.ธกส</span>
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600 block sm:inline">สาขา:</span> 
                  <span className="font-semibold text-gray-900 block sm:inline sm:ml-1">ไชยา สุราษฎร์ธานี</span>
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600 block sm:inline">ชื่อบัญชี:</span> 
                  <span className="font-semibold text-gray-900 block sm:inline sm:ml-1">มูลนิธิอัลอามานะห์ เพื่อการศึกษาและสังคม</span>
                </p>
              </div>
              <div 
                className="bg-emerald-600 rounded-lg p-4 sm:p-5 text-center mt-4 relative group cursor-pointer active:scale-95 transition-transform select-none" 
                onClick={copyAccountNumber}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  copyAccountNumber();
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <p className="text-xs sm:text-sm text-emerald-100">แตะเพื่อคัดลอกเลขบัญชี</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-white text-xl sm:text-2xl font-bold tracking-wider">{accountNumber}</p>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-70 group-hover:opacity-100 group-active:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                {copied && (
                  <div className="absolute inset-0 bg-emerald-700 rounded-lg flex items-center justify-center">
                    <p className="text-white text-base sm:text-lg font-semibold">คัดลอกแล้ว ✓</p>
                  </div>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3">*โปรดแจ้งการโอนพร้อมหลักฐาน</p>
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section className="border-t border-gray-200 pt-6 sm:pt-8">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">ติดต่อสอบถามข้อมูลเพิ่มเติม</h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0810165181" className="hover:text-emerald-600 transition-colors">โทร: 081-016-5181 (ปรัชญา)</a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@alamanah.or.th" className="hover:text-emerald-600 transition-colors">อีเมล: contact@alamanah.or.th</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
