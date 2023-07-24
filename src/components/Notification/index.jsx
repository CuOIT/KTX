import React from "react";
import "./index.css";
const Notification = () => {
    const notiList = [
        {
            title: "Khánh thành tòa nhà B12",
            time: "12 Mar 2022",
        },
        {
            title: "Chào mừng các tân sinh viên",
            time: "23 Jul 2022",
        },
        {
            title: "Lịch cắt điện ngày 23-4-2023",
            time: "23 Apr 2023",
        },
        {
            title: "Kế hoạch thu tiền phòng tháng 4",
            time: "30 Apr 2023",
        },
    ];
    return (
        <div className="noti-container">
            <div className="noti-wrapper">
                <div className="noti-label">
                    <p>Thông báo</p>
                </div>
                <div className="noti-list">
                    {notiList.map((item, index) => {
                        return (
                            <div className="noti" key={index}>
                                <div className="noti-title noti-text">{item.title}</div>
                                <div className="noti-time noti-text">{item.time}</div>
                            </div>
                        );
                    })}
                    {notiList.map((item, index) => {
                        return (
                            <div className="noti" key={index}>
                                <div className="noti-title noti-text">{item.title}</div>
                                <div className="noti-time noti-text">{item.time}</div>
                            </div>
                        );
                    })}{" "}
                    {notiList.map((item, index) => {
                        return (
                            <div className="noti" key={index}>
                                <div className="noti-title noti-text">{item.title}</div>
                                <div className="noti-time noti-text">{item.time}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Notification;
