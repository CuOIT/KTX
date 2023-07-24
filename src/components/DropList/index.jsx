import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = ({ name, list }) => {
    const [value, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, border: "none" }}>
            <FormControl fullWidth sx={{ border: "none" }}>
                <InputLabel id="demo-simple-select-label">{}</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} label={name} onChange={handleChange}>
                    {list.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};

export default DropDown;
