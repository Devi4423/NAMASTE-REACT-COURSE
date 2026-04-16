import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import ResCard_MockData from "../mocks/resCardMockData.json"


it("shound render restaurant card component with propsData",()=>{
    render(
        <RestaurantCard resdata={ResCard_MockData}/>
    )

    const resname = screen.getByText("Bheemas Cafe and Resto");

    expect(resname).toBeInTheDocument();
})