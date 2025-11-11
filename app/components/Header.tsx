import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-emerald-800 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0">
            <Image 
              src="/images/logo.png" 
              alt="โลโก้มูลนิธิอัลอามานะห์" 
              width={64} 
              height={64}
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-xl md:text-2xl font-bold text-white leading-tight">
              มูลนิธิอัลอามานะห์ เพื่อการศึกษาและสังคม
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">จังหวัดสุราษฎร์ธานี</p>
          </div>
        </div>
      </div>
    </header>
  );
}
