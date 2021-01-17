const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            cardPlayer1:{},
            cardPlayer2:{},
            currentUser: {
                /* name: 'sacm1046',
                email: 'sacm1046@gmail.com',
                scores: 0 */
            }
        },
        actions: {
            setCardPlayer: (cardNumber, card) =>{
                setStore({
                    [`cardPlayer${cardNumber}`]: card
                })
                console.log(getStore()[`cardPlayer${cardNumber}`])
            },
            login: (user) => {
                const { displayName, email } = user;
                setStore({
                    currentUser: {
                        email: email,
                        name: displayName,
                        scores: 0
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