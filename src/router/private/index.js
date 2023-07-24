import Login from "../../layout/login";
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import HomePage from "../../components/Homepage";
import Rooms, { Cell } from "../../components/Room";
import Notification from "../../components/Notification";
import StudentLayout from "../../layout/student";
const PrivateRoutes = [
    {
        path: "/",
        element: HomePage,
        layout: StudentLayout,
    },
    {
        path: "/login",
        element: LoginForm,
        layout: Login,
    },
    {
        path: "/signup",
        element: SignupForm,
        layout: Login,
    },
    {
        path: "/room",
        element: Rooms,
        layout: StudentLayout,
    },
    {
        path: "notification",
        element: Notification,
        layout: StudentLayout,
    },
];
export default PrivateRoutes;
