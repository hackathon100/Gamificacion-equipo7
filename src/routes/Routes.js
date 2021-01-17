import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateRoom from '../pages/CreateRoom';
import Cachipun from '../pages/Cachipun';
import Cards from '../pages/Cards';
import HistoryResults from '../pages/HistoryResults';
import JoinRoom from '../pages/JoinRoom';
import Results from '../pages/Results';
import WaitingRoom from '../pages/WaitingRoom';
import Question from '../pages/Question';
import ResultPlayer1Lose from '../pages/ResultPlayer1Lose';
import ResultPlayer2Lose from '../pages/ResultPlayer2Lose';
import ResultPlayer2Win from '../pages/ResultPlayer2Win';
import ResultPlayer1Win from '../pages/ResultPlayer1Win';
import injectContext, { Context } from '../context/appContext';
import { signInWithGoogle, signOutWithGoogle, successGoogle } from '../firebase/firebase';
import { useContext, useEffect, useState } from 'react';
import GoogleButton from '../components/buttons/googleButton/GoogleButton';

const Routes = () => {

    const { actions } = useContext(Context);
    const [isSignedIn, setIsSignedIn] = useState(false);


    const logout = () => {
        setIsSignedIn(false)
        signOutWithGoogle()
    }


    useEffect(() => {
        successGoogle(actions.login, setIsSignedIn)
    }, [actions])

    return (
        <Router>
            {
                isSignedIn ? (
                    <>
                        <Navbar logout={logout} />
                        <main>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/v1/createroom/:gamesNumber" component={CreateRoom} />
                                <Route exact path="/v1/waitingroom/:numberRoom" component={WaitingRoom} />
                                <Route exact path="/v1/joinroom" component={JoinRoom} />
                                <Route exact path="/v1/cachipun/:numberRoom" component={Cachipun} />
                                <Route exact path="/v1/cards/:gamesNumber" component={Cards} />
                                <Route exact path="/v1/results" component={Results} />
                                <Route exact path="/v1/historyresults" component={HistoryResults} />
                                <Route exact path="/v1/question/:winner" component={Question} />
                                <Route exact path="/v1/player1lose" component={ResultPlayer1Lose} />
                                <Route exact path="/v1/player1win" component={ResultPlayer1Win} />
                                <Route exact path="/v1/player2lose" component={ResultPlayer2Lose} />
                                <Route exact path="/v1/player2win" component={ResultPlayer2Win} />
                                <Route component={NotFound} />
                            </Switch>
                        </main>
                        <Footer />
                    </>
                ) : (
                        <main id="cloud__container">
                            <Switch>
                                <Route exact path="/" component={() => {
                                    return (
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <img src="https://drive.google.com/uc?id=13ADzLZRx23Xwp9oXl9AxuthFYaqhAny3" alt="Not Found" width="150"/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <h3>Ingreso</h3>
                                            </div>
                                            <div className="row justify-content-center">

                                                <GoogleButton
                                                    onClick={signInWithGoogle}
                                                    text="Ingresa con Google"
                                                />
{/* 
                                                <button onClick={signInWithGoogle} className="btn btn-danger">
                                                    sign in google
                                    </button> */}
                                            </div>
                                        </div>
                                    )
                                }} />

                                <Route component={NotFound} />
                            </Switch>
                        </main>

                    )
            }
        </Router>
    )
}

export default injectContext(Routes);
