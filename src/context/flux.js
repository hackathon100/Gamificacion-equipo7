const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: {
                name: 'sacm1046',
                email: 'sacm1046@gmail.com',
                scores: 0
            }
        },
        actions: {
            login: user => {
                const { displayName, email } = user;
                setStore({
                    currentUser: {
                        email: email,
                        name: displayName,
                        score: 0
                    }
                })
            },
            logout: history => {
                setStore({
                    currentUser: {}
                })
                history.push('/')
            }
        }
    }
}
export default getState;