import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore"; 
import { BrowserRouter } from "react-router-dom";


it("should render the navbar Component with login Button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar/>
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button",{name:"Login"});

    expect(loginBtn).toBeInTheDocument();
})

it("should render the navbar Component with carts of 0 items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar/>
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText("Cart (0)");
    expect(cart).toBeInTheDocument();
})

it("should render the login and logout button in the navbar component",()=>{
   render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Navbar/>
        </Provider>
    </BrowserRouter>
    )

    const loginbtn = screen.getByRole("button",{name:"Login"});
    expect(loginbtn).toBeInTheDocument();
    fireEvent.click(loginbtn);

    const logoutbtn = screen.getByRole("button",{name:"Logout"});
    expect(logoutbtn).toBeInTheDocument();
    fireEvent.click(logoutbtn);

    expect(loginbtn).toBeInTheDocument();

})

it("should render the cart Items in the navbar component with regex",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar/>
            </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})