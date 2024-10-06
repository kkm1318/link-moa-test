"use client"; // 클라이언트 컴포넌트로 선언
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function KakaoCallback() {
  const router = useRouter();
  const { code } = router.query;
  console.log("인가 코드: ", code); // 이 부분에서 받은 인가 코드를 확인

  useEffect(() => {
    if (code) {
      const fetchKakaoToken = async () => {
        try {
          const response = await axios.post(
            `https://kauth.kakao.com/oauth/token`,
            null,
            {
              params: {
                grant_type: "authorization_code",
                client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID, // 정확한 클라이언트 ID 사용
                redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI, // 리디렉션 URI
                code: code, // 받은 인가 코드
              },
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          const { access_token } = response.data;

          // 액세스 토큰으로 사용자 정보 요청
          const userInfoResponse = await axios.get(
            `https://kapi.kakao.com/v2/user/me`,
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          console.log("카카오 사용자 정보:", userInfoResponse.data);
        } catch (error) {
          console.error("카카오 로그인 실패:", error);
        }
      };

      fetchKakaoToken();
    }
  }, [code]);

  return <div>카카오 로그인 중...</div>;
}
