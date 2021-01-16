import React, { Component } from 'react';
import getState from './flux';

export const Context = React.createContext(null);
const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props) {
            super(props);
            //this will be passed as the contenxt value
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore =>
                    this.setState({
                        store: Object.assign(this.state.store, updatedStore)
                    })
            });
        }

        componentDidMount() {
        }

        render() {
            return (
                <Context.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </Context.Provider>
            );
        }
    }
    return StoreWrapper;
}
export default injectContext;