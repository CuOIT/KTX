import Login from "../../layout/login";
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import GuestLayout from "../../layout/guest";
import HomePage from "../../components/Homepage";
import Rooms, { Cell } from "../../components/Room";
import Notification from "../../components/Notification";
const PublicRoutes = [
    {
        path: "/",
        element: HomePage,
        layout: GuestLayout,
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
        layout: GuestLayout,
    },
    {
        path: "notification",
        element: Notification,
        layout: GuestLayout,
    },
];
export default PublicRoutes;
