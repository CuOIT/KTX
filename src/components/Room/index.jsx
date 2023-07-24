import React, { useState } from "react";
import "./index.css";
import { Table } from "@mantine/core";
const Rooms = () => {
    const elements = [
        {
            ten: "B201",
            suc_chua: 4,
            co_so_vat_chat: "Điều hòa, Quạt, Tủ lanh",
            gia_tien: 500000,
            trang_thai: "Còn trống",
        },
        {
            ten: "B203",
            suc_chua: 55,
            co_so_vat_chat: "Điều hòa,TV, Quạt, Tủ lanh",
            gia_tien: 4500000,
            trang_thai: "Đã thuê",
        },
        {
            ten: "A203",
            suc_chua: 5,
            co_so_vat_chat: "Điều hòa, Quạt, Bếp",
            gia_tien: 300000,
            trang_thai: "Đã thuê",
        },
        {
            ten: "B331",
            suc_chua: 2,
            co_so_vat_chat: "Điều hòa, Tủ lanh",
            gia_tien: 200000,
            trang_thai: "Còn trống",
        },
        {
            ten: "A201",
            suc_chua: 4,
            co_so_vat_chat: "Giường đôi, Quạt, Tủ lanh",
            gia_tien: 500000,
            trang_thai: "Còn trống",
        },
        {
            ten: "B201",
            suc_chua: 4,
            co_so_vat_chat: "Điều hòa, Quạt, Tủ lanh",
            gia_tien: 500000,
            trang_thai: "Còn trống",
        },
        {
            ten: "B203",
            suc_chua: 55,
            co_so_vat_chat: "Điều hòa,TV, Quạt, Tủ lanh",
            gia_tien: 4500000,
            trang_thai: "Đã thuê",
        },
        {
            ten: "A203",
            suc_chua: 5,
            co_so_vat_chat: "Điều hòa, Quạt, Bếp",
            gia_tien: 300000,
            trang_thai: "Đã thuê",
        },
        {
            ten: "B331",
            suc_chua: 2,
            co_so_vat_chat: "Điều hòa, Tủ lanh",
            gia_tien: 200000,
            trang_thai: "Còn trống",
        },
        {
            ten: "A201",
            suc_chua: 4,
            co_so_vat_chat: "Giường đôi, Quạt, Tủ lanh",
            gia_tien: 500000,
            trang_thai: "Còn trống",
        },
        {
            ten: "B201",
            suc_chua: 4,
            co_so_vat_chat: "Điều hòa, Quạt, Tủ lanh",
            gia_tien: 500000,
            trang_thai: "Còn trống",
        },
        {
            ten: "B203",
            suc_chua: 55,
            co_so_vat_chat: "Điều hòa,TV, Quạt, Tủ lanh",
            gia_tien: 4500000,
            trang_thai: "Đã thuê",
        },
        {
            ten: "A203",
            suc_chua: 5,
            co_so_vat_chat: "Điều hòa, Quạt, Bếp",
            gia_tien: 300000,
            trang_thai: "Đã thuê",
        },
        {
            ten: "B331",
            suc_chua: 2,
            co_so_vat_chat: "Điều hòa, Tủ lanh",
            gia_tien: 200000,
            trang_thai: "Còn trống",
        },
        {
            ten: "A201",
            suc_chua: 4,
            co_so_vat_chat: "Giường đôi, Quạt, Tủ lanh",
            gia_tien: 500000,
            trang_thai: "Còn trống",
        },
    ];
    const [displayList, setDisplayList] = useState(elements);
    return (
        <div className="room-table-container">
            <div className="room-table-filters">
                <div className="room-table-filter" onClick={() => setDisplayList(elements)}>
                    Tất cả
                </div>
                <div
                    className="room-table-filter"
                    onClick={() => {
                        const list = elements.filter((item) => {
                            return item.trang_thai == "Còn trống";
                        });
                        setDisplayList(list);
                    }}
                >
                    Còn trống
                </div>
                <div
                    className="room-table-filter"
                    onClick={() => {
                        const list = elements.filter((item) => {
                            return item.trang_thai == "Đã thuê";
                        });
                        setDisplayList(list);
                    }}
                >
                    Đã thuê
                </div>
            </div>
            <Table className="rooms-table">
                <thead>
                    <tr>
                        <th>Tên phòng</th>
                        <th>Sức chứa</th>
                        <th>Cơ sở vật chất</th>
                        <th>Giá tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {displayList.map((element) => (
                        <tr className="room-table-row">
                            <td>{element.ten}</td>
                            <td>{element.suc_chua}</td>
                            <td>{element.co_so_vat_chat}</td>
                            <td>{element.gia_tien}</td>
                            <td>{element.trang_thai}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Rooms;
