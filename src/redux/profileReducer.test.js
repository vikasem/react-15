import profileReducer, { addPost, deletePost } from "./profileReducer";
let state = {
    postData: [
        { id: 1, message: 'Привет, меня зовут Вика', count: 10 },
        { id: 2, message: 'Это мой первый пост', count: 15 }
    ]
}

it('new post should be added', () => {
    //1.data
    let action = addPost('follow me')
    //2. action 
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.postData.length).toBe(3)
})

it(`message of new post should be 'follow me'`, () => {
    //1.data
    let action = addPost('follow me')
    //2. action 
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.postData[2].message).toBe('follow me')
})

it(`after deleting length of messages should be decrement'`, () => {
    //1.data
    let action = deletePost(1)
    //2. action 
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.postData.length).toBe(1)
})

it(`after deleting length of messages should be decrement if id is incorrect'`, () => {
    //1.data
    let action = deletePost(100)
    //2. action 
    let newState = profileReducer(state, action)
    //3.expectation
    expect(newState.postData.length).toBe(2)
})

