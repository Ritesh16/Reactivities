import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetailPage from "../../features/activities/details/ActivityDetailPage";
import Counter from "../../features/counter/Counter";
import TestErrors from "../../features/errors/TestErrors";
import NotFound from "../../features/errors/NotFound";
import ServerErrors from "../../features/errors/ServerErrors";
import LoginForm from "../../features/account/LoginForm";
import RequireAuth from "./RequireAuth";
import RegisterForm from "../../features/account/RegisterForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                  { path: '/activities', element: <ActivityDashboard />},
                  { path: '/activities/:id', element: <ActivityDetailPage />},
                  { path: '/createActivity', element: <ActivityForm key="create" />},
                  { path: '/manage/:id', element: <ActivityForm />},
            ]},
            { path: '', element: <HomePage />},
          
            { path: '/counter', element: <Counter />},
            { path: '/errors', element: <TestErrors />},
            { path: '/not-found', element: <NotFound />},
            { path: '/server-error', element: <ServerErrors />},
            { path: '/login', element: <LoginForm />},
            { path: '/register', element: <RegisterForm />},
            { path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])