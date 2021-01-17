import { useContext } from 'react';
import Button from '../components/buttons/button/Button';
import HomeModalButton from '../components/buttons/homeModalButton/HomeModalButton';
import PlusIcon from '../components/icons/PlusIcon';
import WorldIcon from '../components/icons/WorldIcon';
import TrophyIcon from '../components/icons/TrophyIcon';
import Modal from '../components/modal/Modal';
import { Context } from '../context/appContext';
/* import cards from '../mocks/cards.json';
import { db } from '../firebase/firebase'; */


const Home = ({ history }) => {

    const { store } = useContext(Context)


    /*   const upload = () => {
          cards.forEach(async (card) => {
              await db.collection('cards').doc().set(card)
          })
      } */

    return (
        <div className="bg-danger">
            <div className="container py-5 text-white">
                {/* <button onClick={upload}>upload</button> */}
                {/*  <img src="https://drive.google.com/uc?id=1-9UVX6nOSDaOmreRavLq4T7EdV9ClJOX" alt="asd"/> */}

                <div className="row justify-content-center">
                    <h1>Bienvenido {store.currentUser.name}</h1>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        {/*15zsesSpRJLlh_sV8f-y5eAbyyXq2NS73*/}
                        <Button
                            
                            dataToggle="modal"
                            dataTarget="#homeModal"
                            
                            height={70}
                            width={70}
                            className="btn__home"
                            bgImage='https://drive.google.com/uc?id=15zsesSpRJLlh_sV8f-y5eAbyyXq2NS73'
                        />
                    </div>
                    <div className="col-4">
                        <Button
                            
                            onClick={() => history.push('/v1/joinroom')}
                            height={70}
                            width={70}
                            className="btn__home"
                            bgImage='https://drive.google.com/uc?id=1LbVL_alDzwBPDDXBx3jEkUHOqwWd7gK7'
                        />
                    </div>
                    <div className="col-4">
                        <Button
                            
                            onClick={() => history.push('/v1/historyresults')}
                               height={70}
                            width={70}
                            className="btn__home"
                            bgImage='https://drive.google.com/uc?id=1S-hx1WPYxj7ZdL6SaKOhSPBNHKDERuZz'
                        />
                    </div>
                </div>
            </div>

            <Modal id="homeModal">
                <div className="row justify-content-around text-center">
                    <HomeModalButton text="1" />
                    {/*  <HomeModalButton text="3" />
                    <HomeModalButton text="5" />
                    <HomeModalButton text="7" /> */}
                </div>
            </Modal>

        </div>
    )
}

export default Home
