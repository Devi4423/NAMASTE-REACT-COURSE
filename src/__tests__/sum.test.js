import { sum } from "../components/sum";

test("should be sum two numbers",()=> {
    const result = sum(4,3);
    // console.log(result);
    expect(result).toBe(7);
})