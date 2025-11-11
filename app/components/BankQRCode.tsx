"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function BankQRCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // ข้อมูลบัญชีธนาคาร
      const bankInfo = `ธ.ธกส สาขาไชยา สุราษฎร์ธานี
มูลนิธิอัลอามานะห์ เพื่อการศึกษาและสังคม
เลขที่บัญชี: 020-1-8937-815`;

      QRCode.toCanvas(canvasRef.current, bankInfo, {
        width: 200,
        margin: 2,
        color: {
          dark: "#059669", // สีเขียว emerald-600
          light: "#FFFFFF",
        },
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="rounded-lg shadow-md" />
      <p className="text-xs text-gray-500 mt-2">สแกน QR Code เพื่อดูข้อมูลบัญชี</p>
    </div>
  );
}
