import React, { Component, Fragment,} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';
import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import HomePage from './HomePage/HomePage'
import CustomScrollbars from '../components/CustomScrollbars'
import DetailTeacher from './Patient/Teacher/DetailTeacher';
import Teacher from '../routes/Teacher';
import VerifyEmail from './Patient/VerifyEmail';
import DetailCourse from './Patient/DetailCourse';
import DetailSpecialty from './Patient/Event/DetailSpecialty';
import DetailClinic from './Patient/Clinic/DetailClinic';
import teacher_more from './Patient/Teacher/teacher_more';
import course_more from './Patient/course_more';
import specialty_more from './Patient/Event/specialty_more';
import clinic_more from './Patient/Clinic/clinic_more';
import UserManage from './System/UserManage';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    

    render() {
        
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <div className="content-container">
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={'/teacher/'} component={userIsAuthenticated(Teacher)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />
                                    <Route path={path.DETAIL_TEACHER} component={DetailTeacher} />
                                    <Route path={path.DETAIL_EVENT} component={DetailSpecialty} />
                                    {/* <Route path={path.DETAIL_CLINIC} component={DetailClinic} /> */}
                                    <Route path={path.VERIFY_EMAIL_BOOKING} component={VerifyEmail} />
                                    <Route path={path.DETAIL_COURSE} component={DetailCourse} />
                                    <Route path={path.TEACHER} component={teacher_more} />
                                    <Route path={path.SPECIALTY} component={specialty_more} />
                                    {/* <Route path={path.CLINIC} component={clinic_more} /> */}
                                    <Route path={path.COURSE} component={course_more} />
                                </Switch>
                        </div>

                        {/* <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        /> */}

                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                        {/* Same as */}
                        <ToastContainer />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);