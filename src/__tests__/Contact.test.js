import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact component testing",()=>{

    it("should be rendered contact component with heading", ()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    it("should be rendered contact page component with submit button", ()=>{
        render(<Contact/>)

        //Querying
        const button = screen.getByRole("button")

        //Assertion
        expect(button).toBeInTheDocument();
    })

    it("should be rendered contact component with input name", ()=>{
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("Enter email");
        // console.log(inputName);
        expect(inputName).toBeInTheDocument();
    })

    it("should be rendered contact component with two input box",()=>{
        render(<Contact/>)
        const twoInputBox = screen.getAllByRole("textbox");
        // console.log(twoInputBox.length)
        expect(twoInputBox.length).toBe(2);
    })
})

