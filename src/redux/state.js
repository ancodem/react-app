const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const POST_INPUT = 'SHOW-POST-INPUT';

const store = {
    _state : {
        profilePage : {
            posts : [
                {message: 'hi there'},
                {message: 'hello, world'},
                {message: 'barabashka'},
                {message: 'pater noster'},
                {message: 'qui es in celis'},
                {message: 'Ragnar Logbrock'},
                {message: 'You misspelled that one'},
            ],
            newPost : '',
        },
        dialogsPage : {
            dialogs : [
                { id : 1, name : 'Dasha' },
                { id : 2, name : 'Damir' },
                { id : 3, name : 'Artur' },
                { id : 4, name : 'Kriss' },
                ],
            messages : [
                { id : 1, message : 'Hey there' },
                { id : 2, message : 'Sup, bro' },
                { id : 3, message : 'How are you doin\'??' },
            ],

        },
    },
    getState () {
        return this._state;
    },
    reRenderPage () {},
    assign (observer) {
        this.reRenderPage = observer;
    },
    _showPostInput(input) {
        this._state.profilePage.newPost = input;
        this.reRenderPage(); 
    },
    _addPost() {
        const newPost = { message : this._state.profilePage.newPost };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost = '' ;
        this.reRenderPage(); 
    },
    _deletePost(post) {
        this._state.profilePage.posts.splice(post, 1);
        this.reRenderPage();
    },

    dispatch (action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost()
                break;

            case DELETE_POST:
                this._deletePost(action.post)
                break;

            case POST_INPUT:
                this._showPostInput(action.input)
                break;
        }
            
    }
}

export const postInputActionCreator = (input) => ({
    type: POST_INPUT,
    input: input,
})

export const addPostActionCreator = () => ({ type: ADD_POST })

export const deletePostActionCreator = (post) => (
    { type: DELETE_POST, post: post }
    )

export default store;

