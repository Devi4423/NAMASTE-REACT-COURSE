import {  fireEvent, render,screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import ResMenu_MockData from "../mocks/resMenuMockData.json"
import { act } from "react";
import { Provider } from "react-redux";
import Cart from "../components/Cart";
import appStore from "../redux/appStore";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { forceExit } from "../../jest.config";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(ResMenu_MockData)
    })
})

it("should render the restaurant menu component with cart item is empty", async ()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                    <Navbar />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>)
    })

    const emptyCart = screen.getByText("Your Cart is Empty");
    expect(emptyCart).toBeInTheDocument();
})

it("should render the restaurant menu component with first restaurant category", async ()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                    <Navbar />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>)
    })

    const resCategory = screen.getAllByTestId("res-category");
    expect(resCategory.length).toBe(31);

    const recommendedCategory = screen.getByText("Recommended (11)")
    expect(recommendedCategory).toBeInTheDocument()

    const recommendeditemCard1 = screen.getByText("Egg Biryani")
    expect(recommendeditemCard1).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button",{name:"Add"})
    // console.log(addBtn.length)
    expect(addBtn[0]).toBeInTheDocument();
    fireEvent.click(addBtn[0]);

    const cart = screen.getByText("Cart (1)");
    expect(cart).toBeInTheDocument();

    const cartItem1 = screen.getAllByTestId("cart-item");
    expect(cartItem1.length).toBe(1);

    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    const cartItem2 = screen.getAllByTestId("cart-item");
    expect(cartItem2.length).toBe(2);
})


it("should render the restaurant menu component with second restaurant category", async ()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                    <Navbar/>
                    <Cart />
                </Provider>
            </BrowserRouter>)
    })

    const pizzaNonVegCategory = screen.getByText("Pizza Non Veg (5)");
    expect(pizzaNonVegCategory).toBeInTheDocument();
    fireEvent.click(pizzaNonVegCategory);

    const pizzaNonVegItem1 = screen.getByText("Grilled Chicken Pizza")
    expect(pizzaNonVegItem1).toBeInTheDocument();

    const addBtn = screen.getAllByRole("button",{name:"Add"})
    expect(addBtn[0]).toBeInTheDocument();
    fireEvent.click(addBtn[0]);

    const cart3 = screen.getByText("Cart (3)");
    expect(cart3).toBeInTheDocument()

    const cartItems3 = screen.getAllByTestId("cart-item");
    expect(cartItems3.length).toBe(3);

})

it("should render the cart component with remove item from the cart", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    })

    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems.length).toBe(3);

    const removeBtn = screen.getAllByRole("button",{name:"Remove"});
    expect(removeBtn[0]).toBeInTheDocument()
    fireEvent.click(removeBtn[0]);

    const cartItemsAfterRemove = screen.getAllByTestId("cart-item");
    expect(cartItemsAfterRemove.length).toBe(2);
})

it("should render the cart component with clear all the cart items", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    })

    const cartItems = screen.getAllByTestId("cart-item");
    expect(cartItems.length).toBe(2);

    const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"});
    expect(clearCartBtn).toBeInTheDocument();
    fireEvent.click(clearCartBtn);

    const emptyCart = screen.getByText("Your Cart is Empty");
    expect(emptyCart).toBeInTheDocument();
})

