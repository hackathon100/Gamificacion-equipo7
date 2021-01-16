const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: {}
        },
        actions: {
            login: user => {
                console.log(user)
                const { displayName, email } = user;
                setStore({
                    currentUser: {
                        email: email,
                        name: displayName,
                        score: 0
                    }
                })
            },
            logout: () => {
                setStore({
                    currentUser: {}
                })
            }
        }
    }
}
export default getState;