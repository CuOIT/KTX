import React from "react";
import "./index.css";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../../asset/surface1.png";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
const StudentLayout = ({ children }) => {
    const handleSignOut = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };
    const navigate = useNavigate();
    return (
        <div className="studentl-layout">
            <Toaster />
            <div className="studentl-sidebar">
                <img
                    className="studentl-logo"
                    src={logo}
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <div className="studentl-choice-field">
                    <div className="studentl-choice" onClick={() => navigate("/room")}>
                        Phòng
                    </div>
                    <div className="studentl-choice" onClick={() => toast.error("Đang hoàn thiện")}>
                        Phòng của tôi
                    </div>
                    <div className="studentl-choice" onClick={() => toast.error("Đang hoàn thiện")}>
                        Thanh toán
                    </div>
                    <div className="studentl-choice" onClick={() => navigate("/notification")}>
                        Thông báo
                    </div>
                    <div className="studentl-choice" onClick={() => toast.error("Đang hoàn thiện")}>
                        Báo cáo
                    </div>

                    <div className="signout-btn" onClick={handleSignOut}>
                        <p>Đăng xuất</p>
                        <FiLogOut />
                    </div>
                </div>
            </div>
            <div className="studentl-body">
                <div className="studentl-nav">
                    <div className="studentl-nav-title">KÍ TÚC XÁ BÁCH KHOA</div>
                    <div className="studentl-nav-icon">
                        <IoMdNotificationsOutline />
                    </div>
                    <div className="studentl-signin-btn">
                        <button>Student</button>
                    </div>
                </div>
                <div className="studentl-children">{children}</div>
            </div>
        </div>
    );
};
export default StudentLayout;
