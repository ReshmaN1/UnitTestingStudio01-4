const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){
  //testing code here...
it("returns 'Launch!' when passed a number only divisible by 2",
  function(){
    let expected = 'Launch!';
    let actual = launchOutput(2);
  expect(actual).toEqual(expected);
})
it("returns 'Code!' when passed a number only divisible by 3",
  function(){
    let expected = 'Code!';
    let actual = launchOutput(3);
    expect (actual).toEqual(expected);
})
it("returns 'Rocks!' when passed a number only divisible by 5",
  function(){
    let expected = 'Rocks!';
    let actual = launchOutput(5);
    expect (actual).toEqual(expected);
})
it("returns 'LaunchCode!' when passed a number only divisible by 2 and 3",
  function(){
    let expected = 'Launch Code!';
    let actual = launchOutput(6);
    expect (actual).toEqual(expected);
})
it("returns 'Code Rocks!' when passed a number only divisible by 3 and 5",
  function(){
    let expected = 'Code Rocks!';
    let actual = launchOutput(15);
    expect (actual).toEqual(expected);
})
it("returns ''Launch Rocks! (CRASH!!!!)'' when passed a number only divisible by 2 and 5",
  function(){
    let expected = 'Launch Rocks!';
    let actual = launchOutput(10);
    expect(actual).toEqual(expected);
})
it("returns 'Launch Code Rocks!' when passed a number only divisible by 2 ,3 and 5",
  function(){
    let expected = 'Launch Code Rocks!';
    let actual = launchOutput(30);
    expect (actual).toEqual(expected);
})
it("returns 'Rutabagas! That doesn't work.' when passed a number only divisible by 2 ,3 and 5",
  function(){
   let expected = `Rutabagas! That doesn't work.`;
    let actual = launchOutput(7); 
    expect (actual).toEqual(expected);
})
})