import React from "react"
import {mount, shallow} from "enzyme"
import Navigation from "../components/navbar"

describe("Navbar", ()=>{
    const component = shallow(<Navigation />)
    const navLink = component.find(".navLink")
    it("links to homepage",()=>{
        expect(component.find("[href='/']").text()).toBe("Home")
    })
    it("links to about",()=>{
        expect(component.find("[href='/about']").text()).toBe("About")
    })
    it("links to portfolio",()=>{
        expect(component.find("[href='/portfolio']").text()).toBe("Portfolio")
    })
})