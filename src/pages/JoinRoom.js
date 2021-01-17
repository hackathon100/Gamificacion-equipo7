import { useContext, useState, useEffect } from 'react';
import Form from '../components/forms/form/Form';
import FormInput from '../components/forms/formInput/FormInput';
import { Context } from '../context/appContext';
import { db } from '../firebase/firebase';

const JoinRoom = ({ history }) => {

    const { store } = useContext(Context);
    const [code, setCode] = useState('');
    const [mySession, setMySession] = useState({});

    const handleSubmit = async () => {
        if (!code) {
            alert('Es obligatorio ingresar un codigo válido')
        }else {
            if (mySession.players[0].email === store.currentUser.email) {
                alert('No puedes jugar contigo jaja')
            } else if (mySession.players.length > 1) {
                alert('Sala Llena')
            } else {
                await db.collection('rooms').doc(mySession.id).update({
                    ...mySession,
                    players: [...mySession.players, {
                        name: store.currentUser.name,
                        email: store.currentUser.email,
                        score: 0
                    }]
                });
                history.push(`/v1/cards/${code}-${mySession.games}`)
                setCode('')
            }
        }
    }

    useEffect(() => {
        const getRooms = async () => {
            db.collection('rooms').onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach(doc => {
                    docs.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                let currentSession = docs.filter((doc) => doc.code === code)
                console.log(currentSession[0])
                setMySession(currentSession[0])
            })
        }
        getRooms()
    }, [code])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3"></div>
                <div className="col-12 col-md-6">
                    <Form
                        title="Ingresa Aquí tu código"
                        onSubmit={handleSubmit}
                    >
                        <FormInput
                            id="codeJoinRoom"
                            label="Código"
                            value={code}
                            handleChange={(e) => setCode(e.target.value)}
                            name="code"
                            type="text"
                        />
                    </Form>
                </div>
                <div className="col-12 col-md-3"></div>
            </div>
        </div>
    )
}

export default JoinRoom