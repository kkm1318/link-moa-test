// app/page.tsx
"use client"; // 클라이언트 컴포넌트로 선언
// import { useRouter } from "next/router";
import Image from "next/image";
import kakaoIcon from "../public/kakao_login_large_narrow.png";

export default function Home() {
  // const router = useRouter();

  // 카카오 로그인 페이지로 리디렉션
  const handleKakaoLogin = () => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthURL;
  };

  return (
    <div className="grid min-h-screen place-items-center">
      <div>
        <h2 className="text-xl">로그인하세요</h2>
        <button onClick={handleKakaoLogin}>
          <Image src={kakaoIcon} alt="Kakao Login" width={180} height={50} />
        </button>
      </div>
    </div>
  );
}
