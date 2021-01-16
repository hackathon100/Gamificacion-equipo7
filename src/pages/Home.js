import { useContext } from 'react';
import Button from '../components/buttons/button/Button';
import HomeModalButton from '../components/buttons/homeModalButton/HomeModalButton';
import PlusIcon from '../components/icons/PlusIcon';
import WorldIcon from '../components/icons/WorldIcon';
import TrophyIcon from '../components/icons/TrophyIcon';
import Modal from '../components/modal/Modal';
import { Context } from '../context/appContext';


const Home = ({ history }) => {

    const { store } = useContext(Context)

    return (
        <>
            <div className="container">

                {/*  <img src="https://drive.google.com/uc?id=1-9UVX6nOSDaOmreRavLq4T7EdV9ClJOX" alt="asd"/> */}

                <div className="row justify-content-center">
                    <h1>Bienvenido {store.currentUser.name}</h1>
                </div>
                <div className="row justify-content-center text-center">
                    <div class="col-sm-6">
                        <Button
                            icon={<PlusIcon size={20} />}
                            dataToggle="modal"
                            dataTarget="#homeModal"
                            text=" Crear sala"
                        />
                    </div>
                    <div class="col-sm-6">
                        <Button
                            icon={<WorldIcon size={20} />}
                            text=" Unirte a una sala"
                            onClick={() => history.push('/v1/joinroom')}
                        />
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div class="col-sm-6">
                        <Button
                            icon={<TrophyIcon size={20} />}
                            text=" RANKING"
                            onClick={() => history.push('/v1/historyresults')}
                        />
                    </div>
                </div>

            </div>

            <Modal id="homeModal">
                <div className="row justify-content-around text-center">
                    <HomeModalButton text="3" />
                    <HomeModalButton text="5" />
                    <HomeModalButton text="7" />
                </div>
            </Modal>

        </>
    )
}

export default Home
