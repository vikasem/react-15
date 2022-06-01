
let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Привет, меня зовут Вика', count:10 },
            {id: 2, message: 'Это мой первый пост', count:15 }
        ]
    },
    dialogPage: {
        dialogsData: [
            {id: 1, name:'Maria'},
            {id: 2, name:'Sebastian'},
            {id: 3, name:'Jora'},
            {id: 4, name:'Luda'}
        ],
    
        messageData: [
            {id: 1, message:'Hi'},
            {id: 2, message:'I want a cake'},
            {id: 3, message:'Will you go to the zoo?'},
            {id: 4, message:'Bye'}
        ]
    }
}

export let addPost = (postMes) => {
    let newPost = {
        id: 3,
        
        message: postMes,
        count: 1
    }
    state.profilePage.postData.push(newPost)
}

export default state

