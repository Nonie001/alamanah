"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "020189317815";

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
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section with Image */}
        <section className="mb-8 sm:mb-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="px-2 sm:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                ร่วมบริจาควันละ 1 บาท<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>เพื่อซะกาตและการแบ่งปัน
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                ร่วมกับ <span className="font-semibold text-emerald-700">มูลนิธิอัล-อามานะห์ เพื่อการศึกษาและสังคม</span>
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 sm:mb-3">
                <span className="font-bold text-emerald-700 text-base sm:text-lg">เพียงวันละ 1 บาทจากคุณ</span> จะเปลี่ยนชีวิตของผู้ยากไร้ให้ดีขึ้น
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                • สนับสนุนการศึกษาสำหรับเด็กยากไร้<br />
                • จัดหาอาหารและเครื่องอุปโภคบริโภคให้กับครอบครัวที่ขาดแคลน<br />
                • ช่วยเหลือผู้ด้อยโอกาสและผู้สูงอายุในชุมชน<br />
                • สร้างโอกาสในการพัฒนาคุณภาพชีวิตอย่างยั่งยืน
              </p>
              <div className="flex justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4">
                <div className="text-center flex-1 sm:flex-initial max-w-[90px] sm:max-w-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">อาหารและ<br />การยังชีพ</p>
                </div>
                <div className="text-center flex-1 sm:flex-initial max-w-[90px] sm:max-w-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">โอกาส<br />เพื่อเยาวชน</p>
                </div>
                <div className="text-center flex-1 sm:flex-initial max-w-[90px] sm:max-w-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-1.5">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">สนับสนุน<br />การศึกษา</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-1 sm:mb-2">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-blue-900">365 บาท/ปี = 1 บาท/วัน</span>
                </span>
                <br />
                จำนวนเงินเล็กน้อยจากท่านจะกลายเป็นพลังใหญ่ที่เปลี่ยนแปลงชีวิตผู้คนได้จริง
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                ทุกบาทที่ท่านบริจาคคือความหวังและโอกาสใหม่ ร่วมสร้างสังคมแห่งความเมตตาและความเท่าเทียมอย่างยั่งยืน 
                เพราะ<span className="font-semibold text-emerald-700"> การให้คือการได้รับพรที่ยิ่งใหญ่ที่สุด</span>
              </p>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="/images/img.jpg" 
                alt="มูลนิธิอัลอามานะห์ - กิจกรรมช่วยเหลือสังคม" 
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* ช่องทางบริจาค */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
            ช่องทางการบริจาค
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6 px-4">
            ท่านสามารถร่วมบุญบริจาคเพื่อสนับสนุนกิจกรรมของมูลนิธิได้ผ่านบัญชีธนาคารด้านล่าง
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-4 bg-emerald-600 text-white py-2 px-3 rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="text-sm sm:text-base md:text-lg font-bold">บริจาคผ่านธนาคาร</h3>
              </div>
              <div className="space-y-2 sm:space-y-3 text-gray-700">
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600">ธนาคาร: </span> 
                  <span className="font-semibold text-gray-900">ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธกส.)</span>
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600">สาขา: </span> 
                  <span className="font-semibold text-gray-900">ไชยา สุราษฎร์ธานี</span>
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600">เลขที่บัญชี: </span> 
                  <span className="font-semibold text-gray-900">020189317815</span>
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-600">ชื่อบัญชี: </span> 
                  <span className="font-semibold text-gray-900">มูลนิธิอัล-อามานะห์</span>
                </p>
              </div>
              <div 
                className="bg-emerald-600 rounded-lg p-3 sm:p-4 md:p-5 text-center mt-4 relative group cursor-pointer active:scale-95 transition-transform select-none" 
                onClick={copyAccountNumber}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  copyAccountNumber();
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs sm:text-sm text-emerald-100">แตะเพื่อคัดลอกเลขบัญชี</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wider">{accountNumber}</p>
                </div>
                {copied && (
                  <div className="absolute inset-0 bg-emerald-700 rounded-lg flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white text-sm sm:text-base md:text-lg font-semibold">คัดลอกแล้ว</p>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 leading-relaxed">
                *โปรดแจ้งการโอนพร้อมหลักฐานการโอนเงินมาที่เบอร์โทรศัพท์หรืออีเมลด้านล่าง<br />
                เพื่อออกใบเสร็จรับเงินและรับรายงานการใช้เงินบริจาค
              </p>
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section className="border-t border-gray-200 pt-6 sm:pt-8 px-2 sm:px-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-center">ติดต่อสอบถามข้อมูลเพิ่มเติม</h3>
          <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
            ยินดีให้คำปรึกษาและตอบทุกข้อสงสัยเกี่ยวกับการบริจาค
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-gray-700 text-sm sm:text-base mb-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0810165181" className="hover:text-emerald-600 transition-colors">โทร: 081-016-5181 (คุณปรัชญา)</a>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@alamanah.or.th" className="hover:text-emerald-600 transition-colors break-all">อีเมล: contact@alamanah.or.th</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              มูลนิธิอัล-อามานะห์ เพื่อการศึกษาและสังคม จังหวัดสุราษฎร์ธานี<br />
              ดำเนินงานด้วยความโปร่งใสและตรวจสอบได้ เพื่อสังคมที่ดีกว่า
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
