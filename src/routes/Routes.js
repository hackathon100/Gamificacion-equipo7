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
import injectContext, { Context } from '../context/appContext';
import { signInWithGoogle, signOutWithGoogle, successGoogle } from '../firebase/firebase';
import { useContext, useEffect, useState } from 'react';

const Routes = () => {

    const { actions } = useContext(Context);

    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        successGoogle(actions.login, actions.logout, setIsSignedIn)
    }, [actions])

    return (
        <Router>
            {
                isSignedIn ? (
                    <>
                        <Navbar logout={signOutWithGoogle} />
                        <main className="mt-3">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/v1/createroom/:numberRoom" component={CreateRoom} />
                                <Route exact path="/v1/waitingroom/:numberRoom" component={WaitingRoom} />
                                <Route exact path="/v1/joinroom" component={JoinRoom} />
                                <Route exact path="/v1/cachipun" component={Cachipun} />
                                <Route exact path="/v1/cards/:codeRoom" component={Cards} />
                                <Route exact path="/v1/results" component={Results} />
                                <Route exact path="/v1/historyresults" component={HistoryResults} />
                                <Route exact path="/v1/question" component={Question} />
                                <Route component={NotFound} />
                            </Switch>
                        </main>
                        <Footer />
                    </>
                ) : (
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3 style={{ textAlign: "center", marginTop: "50px" }}>Ingreso</h3>
                            </div>
                            <div className="row justify-content-center">
                                <button onClick={signInWithGoogle} className="btn btn-danger">
                                    sign in google
                                    </button>
                            </div>
                        </div>
                    )
            }
        </Router>
    )
}

export default injectContext(Routes);
