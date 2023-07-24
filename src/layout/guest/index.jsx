import React from "react";
import "./index.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../../asset/surface1.png";
import { useNavigate } from "react-router-dom";
const GuestLayout = ({ children }) => {
    const navigate = useNavigate();
    return (
        <div className="guest-layout">
            <div className="guest-sidebar">
                <img
                    className="guest-logo"
                    src={logo}
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <div className="guest-choice-field">
                    <div className="guest-choice" onClick={() => navigate("/room")}>
                        Phòng
                    </div>
                    <div className="guest-choice" onClick={() => navigate("/notification")}>
                        Thông báo
                    </div>
                </div>
            </div>
            <div className="guest-body">
                <div className="guest-nav">
                    <div className="guest-nav-title">KÍ TÚC XÁ BÁCH KHOA</div>
                    <div className="guest-nav-icon">
                        <IoMdNotificationsOutline />
                    </div>
                    <div className="guest-signin-btn">
                        <button
                            onClick={() => {
                                window.location.href = "/login";
                            }}
                        >
                            Đăng nhập
                        </button>
                    </div>
                </div>
                <div className="guest-children">{children}</div>
            </div>
        </div>
    );
};
export default GuestLayout;
