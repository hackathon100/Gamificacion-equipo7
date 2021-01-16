import { useState } from 'react';
import Form from '../components/forms/form/Form';
import FormInput from '../components/forms/formInput/FormInput';

const JoinRoom = ({ history }) => {

    const [code, setCode] = useState('')
    const handleSubmit = () => {
        setCode('')
        history.push(`/v1/cards/${code}`)
    }

    const getRooms = async () => {
        db.collection('rooms').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            let currentSession = docs.filter((doc) => doc.players.length > 1)
            setSession(currentSession[0])
        })
    }

    useEffect(() => {
        getRooms()
    }, [])

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