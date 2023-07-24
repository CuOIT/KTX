import React, { useEffect } from "react";
import style from "./index.module.css";
import one_love_one_future from "../../asset/one_love_one_future.png";
const Login = ({ children }) => {
    console.log({ children });
    return (
        <div className={style["guest-dang-nhap"]}>
            <div className={style["overlap-wrapper"]}>
                <div className={style["overlap"]}>
                    <div className={style["overlap-group"]}>
                        <div className={style["nav-bar"]}>Bach Khoa Dormitory Management</div>
                        <div className={style["content"]}>
                            <img className={style["image"]} alt="Image" src={one_love_one_future} />
                            <div className={style["child"]}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
