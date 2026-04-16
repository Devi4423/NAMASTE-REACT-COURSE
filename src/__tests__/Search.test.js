import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../components/Body";
import ResList_MockData from "../mocks/resListMockData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(ResList_MockData)
    })
})

it("should render body component with search input box", async () => {
   await act(async()=>{
      render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
      )
   })

   const resListBeforesearch = screen.getAllByTestId("res-card");
   console.log("res-list before search", resListBeforesearch.length);
   expect(resListBeforesearch.length).toBe(16);

   const searchBox = screen.getByTestId("searchRestaurant");
   expect(searchBox).toBeInTheDocument();
   fireEvent.change(searchBox,{target:{value:"burger"}});

   const searchBtn = screen.getByRole("button",{name:"Search"})
   expect(searchBtn).toBeInTheDocument();
   fireEvent.click(searchBtn);
 
   const resListAfterSearch = screen.getAllByTestId("res-card");
   console.log('resList After Search',resListAfterSearch.length);
   expect(resListAfterSearch.length).toBe(3);
})

it("should render body component with top rated restaurant", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const resListBeforeClick = screen.getAllByTestId("res-card");
    console.log("resList", resListBeforeClick.length);
    expect(resListBeforeClick.length).toBe(16);

    const topratedBtn = screen.getByRole("button",{name:"Top Rated Restaurant"})
    expect(topratedBtn).toBeInTheDocument();
    fireEvent.click(topratedBtn);

    const topratedResList = screen.getAllByTestId("res-card");
    console.log("topratedResList", topratedResList.length);
    expect(topratedResList.length).toBe(11);
})