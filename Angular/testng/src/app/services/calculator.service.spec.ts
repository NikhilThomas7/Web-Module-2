import { CalculatorService } from "./calculator.service"

describe ('calculator service',()=>{
  it('computes factorial of 5 and gives 120',()=>{
    let service = new CalculatorService;
    let result = service.factorial(1);
    expect(result).toBe(1);

  })

  it('poweresh',()=>{
    let service = new CalculatorService;
    let result = service.power(2,5);
    expect(result).toBe(32);

  })
})