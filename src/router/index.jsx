import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./public";
import PrivateRoutes from "./private";
import { useEffect, useState } from "react";

const Router = () => {
    const [login, setLogin] = useState(null);
    const [fetch, setFetch] = useState(false);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log({ user });
        if (user) setLogin("true");
        else setLogin("false");
    }, []);

    if (login)
        return (
            <Routes>
                {login === "true"
                    ? PrivateRoutes.map((item, index) => {
                          const Element = item.element;
                          console.log(Element);
                          const Layout = item.layout;
                          const Container = (
                              <Layout>
                                  <Element />
                              </Layout>
                          );
                          return (
                              <Route
                                  exact
                                  path={item.path}
                                  key={index}
                                  element={
                                      <Layout>
                                          <Element />
                                      </Layout>
                                  }
                              />
                          );
                      })
                    : PublicRoutes.map((item, index) => {
                          const Element = item.element;
                          console.log(Element);
                          const Layout = item.layout;
                          const Container = (
                              <Layout>
                                  <Element />
                              </Layout>
                          );
                          return (
                              <Route
                                  exact
                                  path={item.path}
                                  key={index}
                                  element={
                                      <Layout>
                                          <Element />
                                      </Layout>
                                  }
                              />
                          );
                      })}
            </Routes>
        );
};
export default Router;
