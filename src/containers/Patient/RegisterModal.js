import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal } from 'reactstrap';
import './RegisterModal.scss'
import _ from 'lodash';
import DatePicker from '../../components/Input/DatePicker';
import Select from 'react-select';
import * as actions from '../../store/actions'
import { LANGUAGES } from '../../utils'
import { postBookAppointment } from '../../services/userService'
import { toast } from 'react-toastify'
import moment from 'moment/moment';

class RegisterModel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doctorId: '',
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            gender: '',
            birthday: '',
            selectedGender: '',
            genderArr: [
                { value: 'Nam', label: 'Nam' },
                { value: 'Nữ', label: 'Nữ' },
              ]
            
        }
    }

    async componentDidMount() {
        
    }


    handleOnChangeInput = (e, id) => {
        let value = e.target.value
        let copyState = { ...this.state }
        copyState[id] = value
        this.setState({
            ...copyState
        })
    }

    handleOnChangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }

    handleChangeSelectedGender = (selectedGender) => {
        this.setState({
            selectedGender
        })
    }

    handleConfirmRegisterModel = async () => {
        // console.log('check state: ', this.state)
        // !data.email || !data.doctorId || !data.timeType || !data.date
        let date = new Date(this.state.birthday).getTime()
        
        console.log('check state: ', this.state)
        let res = await postBookAppointment({
            
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            reason: this.state.reason,
            date: this.props.dataScheduleTimeModal.date,
            birthday: date,
            selectedGender: this.state.selectedGender.value,
        })

        if (res && res.errCode === 0) {
            toast.success('Booking a new appointment succeed!')
            this.props.closeRegisterModel()
        } else {
            toast.error('Booking a new appointment error!')
        }
    }

    render() {
        let { isOpenRegisterModel, closeRegisterModel, dataScheduleTimeModal } = this.props
        console.log(this.state.selectedGender);
        return (
            <div>
                <Modal
                    isOpen={isOpenRegisterModel} className={'RegisterModel-container'}
                    centered={true} size={'lg'}
                >
                    <div className='RegisterModel-content'>
                        <div className='RegisterModel-header'>
                            <span className='left'>
                               Xác nhận đăng kí
                            </span>
                            <span className='right'
                                onClick={closeRegisterModel}
                            ><i className='fas fa-times'></i></span>
                        </div>
                        <div className='RegisterModel-body'>
                            {/* <div className='doctor-info'>
                                <ProfileDoctor
                                    doctorId={doctorId}
                                    isShowDescriptionDoctor={false}
                                    dataScheduleTimeModal={dataScheduleTimeModal}
                                    isShowLinkDetail={false}
                                    isShowPrice={true}
                                />
                            </div> */}



                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>
                                       Họ và Tên
                                    </label>
                                    <input className='form-control'
                                        value={this.state.fullName}
                                        onChange={(e) => this.handleOnChangeInput(e, 'fullName')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        Số điện thoại
                                    </label>
                                    <input className='form-control'
                                        value={this.state.phoneNumber}
                                        onChange={(e) => this.handleOnChangeInput(e, 'phoneNumber')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                       Email
                                    </label>
                                    <input className='form-control'
                                        value={this.state.email}
                                        onChange={(e) => this.handleOnChangeInput(e, 'email')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        Địa chỉ
                                    </label>
                                    <input className='form-control'
                                        value={this.state.address}
                                        onChange={(e) => this.handleOnChangeInput(e, 'address')}
                                    />
                                </div>
                                <div className='col-12 form-group'>
                                    <label>
                                       Lý do
                                    </label>
                                    <input className='form-control'
                                        value={this.state.reason}
                                        onChange={(e) => this.handleOnChangeInput(e, 'reason')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                       Ngày sinh
                                    </label>
                                    <DatePicker
                                        onChange={this.handleOnChangeDatePicker}
                                        className='form-control'
                                        value={this.state.birthday}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        Giới tính
                                    </label>
                                    <Select
                                        defaultValue={this.state.genderArr[0]}
                                        value={this.state.selectedGender}
                                        onChange={this.handleChangeSelectedGender}
                                        options={this.state.genderArr}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='RegisterModel-footer'>
                            <button className='btn-booking-confirm'
                                onClick={() => this.handleConfirmRegisterModel()}
                            >
                                Xác nhận
                            </button>
                            <button className='btn-booking-cancel'
                                onClick={closeRegisterModel}
                            >
                               Hủy
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModel);
