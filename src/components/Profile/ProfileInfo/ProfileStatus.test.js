import { create } from "react-test-renderer"
import React from "react"
import ProfileStatus from "./ProfileStatusClass"

describe ("ProfileStatus component", ()=> {
    test("after creation span should be displayed", ()=> {
        const component = create(<ProfileStatus status = "Okey" />)
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    })
    test("status from props should be in the state", ()=> {
        const component = create(<ProfileStatus status = "Okey" />)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Okey");
    })
    test("after creation input shouldn't be displayed", ()=> {
        const component = create(<ProfileStatus status = "Okey" />)
        const root = component.root;
        expect(()=> {
            let input = root.findByType("input")
        }).toThrow();
    })
    test("after creation span should contains correct status", ()=> {
        const component = create(<ProfileStatus status = "Okey" />)
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Okey");
    })
    test("input should be displayed in editMode instead of span", ()=> {
        const component = create(<ProfileStatus status = "Okey" />)
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Okey");
    })
    test("callback should be called", ()=> {
        let mockCallback = jest.fn()
        const component = create(<ProfileStatus status = "Okey" updateStatus = {mockCallback} />)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})