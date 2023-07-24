import React, { useState } from "react";
import style from "./index.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const LoginForm = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const navigate = useNavigate();
    const handleSignIn = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        const payload = {
            email: email.value,
            password: password.value,
        };
        axios
            .post("http://localhost:8080/api/login", payload)
            .then(async (res) => {
                console.log({ res });
                toast.success("Login successfully!");
                const user = res.data.user;
                localStorage.setItem("user", JSON.stringify(user));
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };
    return (
        <div className={style["form-wrapper"]}>
            <Toaster></Toaster>
            <form className={style["form-login"]} onSubmit={handleSignIn}>
                <h1 className={style["text-title"]}>Đăng nhập</h1>
                <div className={style["inputs"]}>
                    <div className={style["inputs-email"]}>
                        <div className={style["text-base"]}>Email</div>
                        <div className={style["field"]}>
                            <input className={style["text-base"]} name="email" placeholder="email@gmail.com" />
                            <HiOutlineMail className={style["icon"]} />
                        </div>
                    </div>
                    <div className={style["inputs-password"]}>
                        <div className={style["text-base"]}>Mật khẩu</div>
                        <div className={style["field"]}>
                            <input
                                className={style["text-base"]}
                                name="password"
                                type={hidePassword ? "password" : "text"}
                                placeholder="**************"
                            />
                            <div onClick={() => setHidePassword(!hidePassword)}>
                                {hidePassword ? <AiOutlineEyeInvisible className={style["icon"]} /> : <AiOutlineEye className={style["icon"]} />}
                            </div>
                        </div>
                    </div>

                    <button className={style["submit-btn"]} type="submit">
                        Đăng nhập
                    </button>
                </div>
                <div className={style["texts-sign-up"]}>
                    <p className={style["text-lg"]}>
                        <span className={style["text-base"]}>Chưa có tài khoản</span>
                        <span className={style["text-wrapper-2"]}>&nbsp;</span>
                        <span className={style["text-wrapper-3"]}>&nbsp;</span>
                        <span className={`${style["signup-btn"]} ${style["text-base"]}`} onClick={() => navigate("/signup")}>
                            Đăng ký
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;
