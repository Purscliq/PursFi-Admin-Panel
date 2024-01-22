"use client";
import logo from "@/assets/logo.svg";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  //   const [alert, setAlert] = useState("");
  const route  = useRouter();
  return (
    <div className="min-h-screen flex flex-col  max-w-[1640px] bg-[#FAFAFA]">
      <div className=" mx-auto w-full p-3">
        <nav className="py-4 px-8">
          <Image src={logo} alt="logo" />
        </nav>
        <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[559px] mx-auto mt-4 p-6">
          {/* {alert && <Alert type="error" closable message={alert} />} */}
          <h1 className="font-semibold text-2xl mb-2 text-[#000000]">
            Welcome Back !
          </h1>
          <p className=" text-gray-700 text-[18px]">
            Login to visit your dashboard
          </p>
          <form className="w-full space-y-5 mt-4">
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="email"
                className="text-[#181336] text-sm font-[500]"
              >
                Email Address
              </label>
              <Input
                className="w-full "
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="password"
                className="text-[#181336] text-sm font-[500]"
              >
                Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>
            <Button
              type="primary"
              onClick={() => route.push("/dashboard")}
              className="!h-[3rem] !bg-black w-full"
            >
              Login
            </Button>
            <div className=" text-sm underline duration-300 text-gray-600 ">
              <Link href="forget-password">Forgot Password? </Link>{" "}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
