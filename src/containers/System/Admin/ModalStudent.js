import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../../utils/emitter'
import _ from 'lodash'
import { CRUD_ACTIONS } from "../../../utils";
class ModalStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
			UserName: "",
			Password: "",
			StudentName: "",
			StudentBirth: "",
			Address: "",
			ParentName: "",
			Email:"",
			PhoneNumber: "",
			Role: "Student",
            ClassId:''
        }
       
       // this.listenToEmitter()
    }

    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
            UserName: "",
			Password: "",
			StudentName: "",
			StudentBirth: "",
			Address: "",
			ParentName: "",
			Email:"",
			PhoneNumber: "",
			Role: "",
            ClassId:''
            ,action:''
            })
        })
    }
    

    componentDidMount() {
        let user = this.props.user;
        console.log("okema");
        if (user ) {// isOpenModalEditUser: true,
            
            this.setState({
                UserName: user.UserName,
				Password: user.Password,
				StudentName: user.StudentName,
				StudentBirth: user.StudentBirth,
				Address: user.Address,
				ParentName: user.ParentName,
				Email: user.Email,
				PhoneNumber: user.PhoneNumber,
                action: user.action
            })
        }
        console.log('did mount: ', this.props.user)
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleChangeInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value
        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {
        let isValid = true
        let arrInput = ['UserName', 'Password', 'StudentName', 'StudentBirth', 'Address','ParentName', 'Email', 'PhoneNumber','ClassId']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert(`Missing required parameter: ${arrInput[i]}`)
                break
            }
        }
        return isValid
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidInput()
        if (isValid === true) {
            this.props.createNewUserRedux(
                {
                UserName: this.state.UserName,
				Password: this.state.Password,
				StudentName: this.state.StudentName,
				StudentBirth: this.state.StudentBirth,
				Address: this.state.Address,
				ParentName: this.state.ParentName,
				Email: this.state.Email,
				PhoneNumber: this.state.PhoneNumber,
                }
            )
        }
    }

    render() {
        console.log("check", this.props.user)
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                size='lg'
                className='modal-user-container'
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>UserName</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleChangeInput(e, 'UserName') }}
                                value={this.state.UserName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(e) => { this.handleChangeInput(e, 'Password') }}
                                value={this.state.Password}
                            />
                        </div>
                        <div className='input-container'>
                            <label>StudentName</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleChangeInput(e, 'StudentName') }}
                                value={this.state.StudentName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>StudentBirth</label>
                            <input 
                               type="date"
								value={this.state.StudentBirth}
								onChange={(e) => this.handleChangeInput(e, 'StudentBirth')}/>
            
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(e) => { this.handleChangeInput(e, 'address') }}
                                value={this.state.Address}
                            />
                        </div>
                        <div className='input-container'>
                            <label>
									{/* <FormattedMessage id="manage-user.ParentName" /> */}
									Tên phụ huynh
							</label>
							<input className="form-control" type="text"
									value={this.state.ParentName}
									onChange={(e) => this.handleChangeInput(e, 'ParentName')}
							/>
                        </div>
                        
                        <div className='input-container'>
                            <label>
									Email
							</label>
							<input className="form-control" type="text"
									value={this.state.Email}
									onChange={(e) => this.handleChangeInput(e, 'Email')}
							/>
                        </div>
                        <div className='input-container'>
                            <label>
									số điện thoại
							</label>
							<input className="form-control" type="text"
									value={this.state.PhoneNumber}
									onChange={(e) => this.handleChangeInput(e, 'PhoneNumber')}
							/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        className='btn btn-primary'
                        onClick={() => this.handleAddNewUser()}
                    >
                        Add new
                    </button>{' '}
                    <Button
                        color="secondary"
                        className='px-3'
                        onClick={() => this.toggle()}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalStudent);
