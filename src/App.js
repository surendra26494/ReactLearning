import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()

          });


        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    console.log(this.statecurrentUser, this.unsubscribeFromAuth())
    this.unsubscribeFromAuth();
  }


  render() {
    console.log("surendra");
    const owner = {
      value: {
        ownerShip: {
          shared: 50,

        }

      }

    };

    console.log(owner);
    const sharedPercentage = 100;
    // console.log(...owner.value.ownerShip.shared)
    const updatedState = { ...owner.value, shared: sharedPercentage };
    console.log(updatedState)
    const updated2 = {
      ...owner, value: {
        ownerShip: {
          shared: sharedPercentage
        }

      }
    };

    console.log(updated2)



    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App); 