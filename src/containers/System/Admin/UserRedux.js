import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageUser from "./TableManageUser";
import TableManageStudent from "./TableManageStudent";
import { getUserFromStudent } from '../../../services/userService';
import ModalStudent from "./ModalStudent";
class UserRedux extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenModalUser: false,
			isOpenModalEditUser: false,
			isOpen: false,
			id: "",
			UserName: "",
			Password: "",
			StudentName: "",
			StudentBirth: "",
			Address: "",
			ParentName: "",
			Email:"",
			PhoneNumber: "",
			Role: "",
			action: "",
			userEdit:{}
		};
	}

	async componentDidMount() {
		//this.props.getGenderStart();
		//this.props.getPositionStart();
		//this.props.getRoleStart();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		
		if (prevProps.users !== this.props.users) {
			this.setState({
				UserName: "",
				Password: "",
				StudentName: "",
				StudentBirth: "",
				Address: "",
				ParentName: "",
				Email: "",
				//gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : '',
				PhoneNumber:"",
				//position: arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : '',
				//role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : '',
				avatar: "",
				action: CRUD_ACTIONS.CREATE,
				//previewImgUrl: ""
			})
		}
	}

	handleOnChangeImg = async (e) => {
		let data = e.target.files;
		let file = data[0];
		if (file) {
			let base64 = await CommonUtils.getBase64(file)
			console.log('check base64: ', base64)
			let objectUrl = URL.createObjectURL(file);
			this.setState({
				previewImgUrl: objectUrl,
				avatar: base64
			});
		}
	};
///modal

	handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
	handleEditNewUser = () => {
        this.setState({
            isOpenModalEditUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }
	toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }


	handleSaveUser = () => {
		let isValid = this.checkValidInput()
		if (isValid === false) return
		let { action } = this.state

		// fire create user
		if (action === CRUD_ACTIONS.CREATE) {
			this.props.createNewUserRedux({
				UserName: this.state.UserName,
				Password: this.state.Password,
				StudentName: this.state.StudentName,
				StudentBirth: this.state.StudentBirth,
				Address: this.state.Address,
				ParentName: this.state.ParentName,
				Email: this.state.Email,
				PhoneNumber: this.state.PhoneNumber,
				
			})
		}
		if (action === CRUD_ACTIONS.EDIT) {
			this.props.fetchEditStudentStart({
				UserName: this.state.UserName,
				Password: this.state.Password,
				StudentName: this.state.StudentName,
				StudentBirth: this.state.StudentBirth,
				Address: this.state.Address,
				ParentName: this.state.ParentName,
				Email: this.state.Email,
				PhoneNumber: this.state.PhoneNumber,
			})
		}
	}

	handleChangeInput = (e, id) => {

		let copyState = { ...this.state }
		copyState[id] = e.target.value
		this.setState({
			...copyState
		})
	}

	checkValidInput = () => {
		let arrCheck = ['UserName', 'Password', 'StudentName',
			'StudentBirth', 'Address', 'ParentName']
		let isValid = true;

		for (let i = 0; i < arrCheck.length; i++) {
			if (!this.state[arrCheck[i]]) {
				isValid = false
				alert('Missing ' + arrCheck[i])
				break;
			}
		}

		return isValid
	}

	handleEditStudentFromParent = async (user) => {
		// handleEditNewUser();
		
		let tk= await getUserFromStudent(user.UserId);
		console.log(tk);
		this.setState({
			isOpenModalEditUser: true,
			UserName: tk.data.UserName,
			StudentName: user.StudentName,
			Password: tk.data.Password,
			StudentBirth: user.StudentBirth,
			Address: user.Address,
			ParentName: user.ParentName,
			Email: user.Email,
			PhoneNumber: user.PhoneNumber,
			action: CRUD_ACTIONS.EDIT,
			

		})

		// this.setState({
        //     isOpenModalEditUser: true,
        //     userEdit: {
		// 		user,
		// 		UserName: tk.data.UserName,
			
		// 		Password: tk.data.Password,
		// 	}
        // })
	}

	render() {
		//et genders = this.state.genderArr;
		//let positions = this.state.positionArr;
		//let roles = this.state.roleArr;
		let language = this.props.language;
		let {
			UserName, Password, StudentName, StudentBirth, Address,
			ParentName,Email, PhoneNumber, Role,  avatar,
		} = this.state;

		return (
			<div className="user-redux-container">
				<ModalStudent
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    addNewUser={this.props.createNewUserRedux}
                />
				<ModalStudent
                    isOpen={this.state.isOpenModalEditUser}
                    toggleFromParent={this.toggleEditUserModal}
                    addNewUser={this.props.createNewUserRedux}
					user={this.state}
					
                />
				
				<div className="user-redux-body mt-4">
					<div className="container">
						<div className='mx-1 text-center'>
                    		<button
                        	className='btn btn-primary px-3'
                        	onClick={() => this.handleAddNewUser()}>
                        		<i className="fas fa-user-plus add-user"></i>
                       			 Add new user
                    		</button>
                		</div>
						<div className="row">
							<div className="col-12 my-3">
								Quản lí học sinh
							</div>
							<div className="col-3">
								<label>
									Tài khoản
								</label>
								<input
									className="form-control" type="UserName"
									value={UserName}
									onChange={(e) => this.handleChangeInput(e, 'UserName')}
									disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
								/>
							</div>
							<div className="col-3">
								<label>
									Mật khẩu
								</label>
								<input className="form-control" type="Password"
									value={Password}
									onChange={(e) => this.handleChangeInput(e, 'Password')}
									disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
								/>
							</div>
							<div className="col-3">
								<label>
									Họ và tên
								</label>
								<input className="form-control" type="text"
									value={StudentName}
									onChange={(e) => this.handleChangeInput(e, 'StudentName')}
								/>
							</div>
							<div className="col-3">
								<label>
								
									Ngày sinh
								</label>
								
                   
                    			<input className="form-control" type="date" id="birthday" name="birthday"
								value={StudentBirth}
								onChange={(e) => this.handleChangeInput(e, 'StudentBirth')}/>
                  
							</div>
							<div className="col-3">
								<label>
									Địa chỉ
								</label>
								<input className="form-control" type="text"
									value={Address}
									onChange={(e) => this.handleChangeInput(e, 'Address')}
								/>
							</div>
							<div className="col-9">
								<label>
									Tên phụ huynh
								</label>
								<input className="form-control" type="text"
									value={ParentName}
									onChange={(e) => this.handleChangeInput(e, 'ParentName')}
								/>
							</div>

							<div className="col-9">
								<label>
									
									Email
								</label>
								<input className="form-control" type="text"
									value={Email}
									onChange={(e) => this.handleChangeInput(e, 'Email')}
								/>
							</div>
							<div className="col-9">
								<label>
									Số điện thoại
								</label>
								<input className="form-control" type="text"
									value={PhoneNumber}
									onChange={(e) => this.handleChangeInput(e, 'PhoneNumber')}
								/>
							</div>
							<div className="col-3">
								<label>
									Chức danh
								</label>
								<select class="form-control"
									onChange={(e) => this.handleChangeInput(e, 'Role')}
									value={Role}
								>
				
										<option key="1" value="Student">
													học sinh
										</option>
										
								</select>
							</div> 
							 <div className="col-12 my-3">
								<button
									className={
										this.state.action === CRUD_ACTIONS.EDIT ?
											"btn btn-warning" : "btn btn-primary"
									}
									onClick={() => this.handleSaveUser()}
								>
									{this.state.action === CRUD_ACTIONS.EDIT ?
										<FormattedMessage id="manage-user.save-change" /> :
										<FormattedMessage id="manage-user.save" />
									}

								</button>
							</div> 
							<div className="col-12 mb-5">
								{/* <TableManageUser
									handleEditStudentFromParent={this.handleEditStudentFromParent}
									action={this.state.action}
								/> */}
								<TableManageStudent
									handleEditStudentFromParent={this.handleEditStudentFromParent}
									action={this.state.action}
								/>
							</div>
						</div>
					</div>
				</div>

				{this.state.isOpen && (
					<Lightbox
						mainSrc={this.state.previewImgUrl}
						onCloseRequest={() => this.setState({ isOpen: false })}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language,
		//genderRedux: state.admin.genders,
		//isLoadingGender: state.admin.isLoadingGender,
		positions: "",
		//roles: state.admin.roles,
		users: state.admin.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//getGenderStart: () => dispatch(actions.fetchGenderStart()),
		//getPositionStart: () => dispatch(actions.fetchPositionStart()),
		getRoleStart: () => dispatch(actions.fetchRoleStart()),
		createNewUserRedux: (data) => dispatch(actions.createNewUserRedux(data)),
		fetchAllStudentStart: () => dispatch(actions.fetchAllStudentStart()),
		fetchEditStudentStart: (data) => dispatch(actions.fetchEditStudentStart(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
