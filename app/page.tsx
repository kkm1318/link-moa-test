"use client";
import { signIn, useSession, signOut } from "next-auth/react";
// import { signIn, useSession, getCsrfToken, signOut } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";
import naverIcon from "../src/images/btnG_완성형.png";
import kakaoIcon from "../src/images/kakao_login_large_narrow.png";
import googleIcon from "../src/images/web_light_rd_SI@1x.png";

export default function LoginPage() {
  const { data: session } = useSession();
  // const csrfToken = getCsrfToken();

  useEffect(() => {
    console.log("data: ", session);
  }, [session]);

  return (
    <div className="grid min-h-screen place-items-center">
      <div>
        {session ? (
          <div>
            <h2>
              안녕하세요,{" "}
              {session.user?.name ?? session.user?.email?.split("@")[0]} 님
            </h2>
            {/* <img src={session.user?.image} width={100} height={100} /> */}
            <button
              type="button"
              style={{ border: "1px solid black", backgroundColor: "tomato" }}
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => signIn("naver")}>
              <Image
                src={naverIcon}
                alt="Naver Login"
                width={180}
                height={50}
              />
            </button>
            <button onClick={() => signIn("kakao")}>
              <Image
                src={kakaoIcon}
                alt="Kakao Login"
                width={180}
                height={50}
              />
            </button>
            <button onClick={() => signIn("google")}>
              <Image
                src={googleIcon}
                alt="Google Login"
                width={180}
                height={50}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
