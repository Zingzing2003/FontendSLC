import React, { Component } from 'react';
import { connect } from "react-redux";
import './ManageStaff.scss'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from "../../../store/actions";
import { LANGUAGES, dateFormat } from "../../../utils";
import DatePicker from '../../../components/Input/DatePicker';
import moment from 'moment';
import _ from 'lodash';
import { toast } from 'react-toastify'
import { bulkCreateSchedule } from '../../../services/userService'
import TableManageStaff from '../Admin/TableManageStaff';

class ManageStaff extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            UserName:"",
            Password:"",
            StaffName:"",
            DateBirth:"",
            Address:"",
            Email:"",
            PhoneNumber:"",
   
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.allDoctors !== this.props.allDoctors) {
        //     let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
        //     this.setState({
        //         CourseName:"",
        //         Description:" ",
        //     })
        // }

        

        // if (prevProps.language !== this.props.language) {
        //     let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
        //     this.setState({
        //         allDoctors: dataSelect,
        //     })
        // }
    }

  
 
    onChangeInput = (e, id) => {

		let copyState = { ...this.state }
		copyState[id] = e.target.value
		this.setState({
			...copyState
		})
	}

    render() {
        // console.log('check state: ', this.state)
        // console.log('check props: ', this.props)
        let {
            StaffName,
            DateBirth,
            Address,
            Email,
            PhoneNumber,
            Password,
            UserName
		} = this.state;
        // console.log('check schedule: ', schedule)
        //let yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
        return (
            <div className='manage-staff-containner'>
                <div className='m-s-title'>
                    {/* /<FormattedMessage id='manage-chedule.title' /> */}
                    Quản lí Nhân Viên
                </div>
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-6 form-group'>
                            <label>
                                <FormattedMessage id='manage-chedule.select-doctor' />
                            </label>
                            <Select
                                value={this.state.selectedDoctor}
                                onChange={this.handleChangeSelectedDoctor}
                                options={this.state.allDoctors}
                            />
                        </div> */}
                        <div className='col-6 form-group'>
                            <label>
                                Tài khoản
                            </label>
                            <input className="form-control" type="text"
									value={UserName}
									onChange={(e) => this.onChangeInput(e, 'StafUserNamefName')}
								/>
                        </div>
                        <div className='col-6 form-group'>
                            <label>
                               Mật khẩu
                            </label>
                            <input className="form-control" type="text"
									value={Password}
									onChange={(e) => this.onChangeInput(e, 'Password')}
								/>
                        </div>
                        <div className='col-6 form-group'>
                            <label>
                                Tên nhân viên
                            </label>
                            <input className="form-control" type="text"
									value={StaffName}
									onChange={(e) => this.onChangeInput(e, 'StaffName')}
								/>
                        </div>
                        <div className="col-6">
								<label>
									{/* <FormattedMessage id="manage-user.StudentBirth" /> */}
									Ngày sinh
								</label>
								
                   
                    			<input className="form-control" type="date" id="birthday" name="birthday"
								value={DateBirth}
								onChange={(e) => this.onChangeInput(e, 'DateBirth')}/>
                  
						</div>
                        <div className='col-6 form-group'>
                            <label>
                              Địa chỉ
                            </label>
                            <input className="form-control" type="text"
									value={Address}
									onChange={(e) => this.onChangeInput(e, 'Address')}
								/>
                        </div>
                        <div className='col-6 form-group'>
                            <label>
                                Email
                            </label>
                            <input className="form-control" type="text"
									value={Email}
									onChange={(e) => this.onChangeInput(e, 'Email')}
								/>
                        </div>
                        <div className='col-6 form-group'>
                            <label>
                                Số điện thoại
                            </label>
                            <input className="form-control" type="text"
									value={PhoneNumber}
									onChange={(e) => this.onChangeInput(e, 'PhoneNumber')}
								/>
                        </div>
      
                        {/* <div className='col-6 form-group'>
                            <label>
                                <FormattedMessage id='manage-chedule.select-date' />
                            </label>
                            <DatePicker
                                onChange={this.handleOnChangeDatePicker}
                                className='form-control'
                                value={this.state.currentDate}
                                minDate={yesterday}
                            />
                        </div>
                        <div className='col-12 pick-hour-container'>
                            {
                                schedule && schedule.length > 0 &&
                                schedule.map((item, index) => {
                                    return (
                                        <button
                                            className={item.isSelected === true ? 'btn btn-schedule active' : 'btn btn-schedule'}
                                            key={index}
                                            onClick={() => this.handleClickBtnSchedule(item)}
                                        >
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </button>
                                    )
                                })
                            }
                        </div> */}
                        <div className='col-12'>
                            <button
                                className='btn btn-primary btn-save-schedule'
                                onClick={() => this.handleClickBtnSaveSchedule()}
                            >
                                <FormattedMessage id='manage-chedule.save-info' />
                            </button>

                        </div>
                        <TableManageStaff/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // CourseName:"",
        // isLoggedIn: state.user.isLoggedIn,
        // language: state.app.language,
        // allDoctors: state.admin.allDoctors,
        // schedule: state.admin.schedule,
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageStaff);
