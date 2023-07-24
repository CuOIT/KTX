import React, { useState } from "react";
import style from "./index.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import DropDown from "../DropList";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const navigate = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        const e = event.target;
        console.log(e);
        toast.success("Sign up successfully!");
        setTimeout(() => {
            navigate("/login");
        }, 500);
    };
    return (
        <div className={style["box"]}>
            <Toaster />
            <div className={style["form-wrapper"]}>
                <form className={style["form"]} onSubmit={handleSignup}>
                    <div className={style["texts-sign-up"]}>
                        <h1 className={style["text-xl"]}>Đăng ký</h1>
                    </div>
                    <div className={style["inputs"]}>
                        <div className={style["input-name"]}>
                            <div className={style["inputs-fname"]}>
                                <div className={style["text-base"]}>Họ</div>
                                <div className={style["shadow"]}>
                                    <input className={style["text-3"]} placeholder="John" />
                                    <BsFillPersonFill className={style["icon"]} />
                                </div>
                            </div>
                            <div className={style["inputs-lname"]}>
                                <div className={style["text-base"]}>Tên</div>
                                <div className={style["shadow"]}>
                                    <input className={style["text-3"]} placeholder="Doe" />
                                    <BsFillPersonFill className={style["icon"]} />
                                </div>
                            </div>
                        </div>
                        <div className={style["inputs-email"]}>
                            <div className={style["text-base-2"]}>Email</div>
                            <div className={style["shadow-2"]}>
                                <input className={style["text-3"]} placeholder="johndoe@gmail.com" />
                                <HiOutlineMail className={style["icon"]} />
                            </div>
                        </div>
                        <div className={style["uni"]}>
                            <div className={style["s"]}>
                                <div className={style["text-base"]}>MSSV</div>
                                <div className={style["shadow"]}>
                                    <input className={style["text-3"]} placeholder="2020xxxx" />
                                    {/* <BsFillPersonFill className={style["icon"]} /> */}
                                </div>
                            </div>
                            <div className={style["s"]}>
                                <div className={style["text-base"]}>Khóa</div>
                                <div className={style["shadow"]}>
                                    <input className={style["text-3"]} placeholder="K65" />
                                    {/* <BsFillPersonFill className={style["icon"]} /> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style["text-base"]}>Số điện thoại</div>
                            <div className={style["shadow"]}>
                                <input className={style["text-3"]} placeholder="012345678" />
                            </div>
                        </div>
                        <div>
                            <div className={style["text-base"]}>Giới tính</div>
                            <DropDown name={"Giới tính"} list={["Nam", "Nữ"]} />
                        </div>

                        <div>
                            <div className={style["text-base"]}>Địa chỉ</div>
                            <div className={style["shadow"]}>
                                <input className={style["text-3"]} placeholder="1 Thanh Oai" />
                            </div>
                        </div>
                        <div className={style["password-input"]}>
                            <div className={style["inputs-password-2"]}>
                                <div className={style["text-base"]}>
                                    Mật khẩu
                                    <div className={style["shadow"]}>
                                        <input className={style["text-3"]} placeholder="**************" type={hidePassword ? "password" : "text"} />
                                        <div onClick={() => setHidePassword(!hidePassword)}>
                                            {hidePassword ? (
                                                <AiOutlineEyeInvisible className={style["icon"]} />
                                            ) : (
                                                <AiOutlineEye className={style["icon"]} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style["inputs-password"]}>
                                <div className={style["text-base"]}>
                                    Xác nhận
                                    <div className={style["shadow"]}>
                                        <input className={style["text-3"]} placeholder="**************" type={hidePassword ? "password" : "text"} />
                                        <div onClick={() => setHidePassword(!hidePassword)}>
                                            {hidePassword ? (
                                                <AiOutlineEyeInvisible className={style["icon"]} />
                                            ) : (
                                                <AiOutlineEye className={style["icon"]} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style["submit-btn"]}>
                        <p className={style["text-lg"]}>
                            <span className={style["text-wrapper"]}>Đã có tài khoản?</span>
                            <span className={style["span"]}>&nbsp;</span>
                            <span className={style["text-wrapper-2"]}>&nbsp;</span>
                            <span className={style["text-wrapper-3"]} onClick={() => navigate("/login")}>
                                Đăng nhập
                            </span>
                        </p>
                        <button className={style["overlap-group"]} type="submit">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// const SignupForm = () => {
//     const [hidePassword, setHidePassword] = useState(true);
//     const navigate = useNavigate();
//     const handleSignup = (event) => {
//         event.preventDefault();
//         const e = event.target;
//         console.log(e);
//         toast.success("Sign up successfully!");
//         setTimeout(() => {
//             navigate("/login");
//         }, 500);
//     };
//     return (
//         <div className={style["box"]}>
//             <Toaster />
//             <div className={style["form-wrapper"]}>
//                 <form className={style["form"]} onSubmit={handleSignup}>
//                     <div className={style["texts-sign-up"]}>
//                         <h1 className={style["text-xl"]}>Sign Up</h1>
//                     </div>
//                     <div className={style["inputs"]}>
//                         <div className={style["input-name"]}>
//                             <div className={style["inputs-fname"]}>
//                                 <div className={style["text-base"]}>First Name</div>
//                                 <div className={style["shadow"]}>
//                                     <input className={style["text-3"]} placeholder="John" />
//                                     <BsFillPersonFill className={style["icon"]} />
//                                 </div>
//                             </div>
//                             <div className={style["inputs-lname"]}>
//                                 <div className={style["text-base"]}>Last Name</div>
//                                 <div className={style["shadow"]}>
//                                     <input className={style["text-3"]} placeholder="Doe" />
//                                     <BsFillPersonFill className={style["icon"]} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={style["inputs-email"]}>
//                             <div className={style["text-base-2"]}>Email</div>
//                             <div className={style["shadow-2"]}>
//                                 <input className={style["text-3"]} placeholder="johndoe@gmail.com" />
//                                 <HiOutlineMail className={style["icon"]} />
//                             </div>
//                         </div>
//                         <div className={style["uni"]}>
//                             <div className={style["s"]}>
//                                 <div className={style["text-base"]}>StudentID</div>
//                                 <div className={style["shadow"]}>
//                                     <input className={style["text-3"]} placeholder="2020xxxx" />
//                                     {/* <BsFillPersonFill className={style["icon"]} /> */}
//                                 </div>
//                             </div>
//                             <div className={style["s"]}>
//                                 <div className={style["text-base"]}>Year</div>
//                                 <div className={style["shadow"]}>
//                                     <input className={style["text-3"]} placeholder="K65" />
//                                     {/* <BsFillPersonFill className={style["icon"]} /> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div>
//                             <div className={style["text-base"]}>Phone</div>
//                             <div className={style["shadow"]}>
//                                 <input className={style["text-3"]} placeholder="012345678" />
//                             </div>
//                         </div>
//                         <div>
//                             <div className={style["text-base"]}>Gender</div>
//                             <DropDown name={"Giới tính"} list={["Male", "Female"]} />
//                         </div>

//                         <div>
//                             <div className={style["text-base"]}>Address</div>
//                             <div className={style["shadow"]}>
//                                 <input className={style["text-3"]} placeholder="1 Thanh Oai" />
//                             </div>
//                         </div>
//                         <div className={style["password-input"]}>
//                             <div className={style["inputs-password-2"]}>
//                                 <div className={style["text-base"]}>
//                                     Password
//                                     <div className={style["shadow"]}>
//                                         <input className={style["text-3"]} placeholder="**************" type={hidePassword ? "password" : "text"} />
//                                         <div onClick={() => setHidePassword(!hidePassword)}>
//                                             {hidePassword ? (
//                                                 <AiOutlineEyeInvisible className={style["icon"]} />
//                                             ) : (
//                                                 <AiOutlineEye className={style["icon"]} />
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className={style["inputs-password"]}>
//                                 <div className={style["text-base"]}>
//                                     Confirm
//                                     <div className={style["shadow"]}>
//                                         <input className={style["text-3"]} placeholder="**************" type={hidePassword ? "password" : "text"} />
//                                         <div onClick={() => setHidePassword(!hidePassword)}>
//                                             {hidePassword ? (
//                                                 <AiOutlineEyeInvisible className={style["icon"]} />
//                                             ) : (
//                                                 <AiOutlineEye className={style["icon"]} />
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={style["submit-btn"]}>
//                         <p className={style["text-lg"]}>
//                             <span className={style["text-wrapper"]}>Already a member?</span>
//                             <span className={style["span"]}>&nbsp;</span>
//                             <span className={style["text-wrapper-2"]}>&nbsp;</span>
//                             <span className={style["text-wrapper-3"]} onClick={() => navigate("/login")}>
//                                 Sign In
//                             </span>
//                         </p>
//                         <button className={style["overlap-group"]} type="submit">
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
export default SignupForm;
