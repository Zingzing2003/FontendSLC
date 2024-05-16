import React, { Component } from 'react';
import { connect } from "react-redux";
// import { FormattedMessage } from 'react-intl';
import './DetailEvent.scss'
import HomeHeader from '../../HomePage/HomeHeader';
import { getDetailEventById, getAllCodeService } from '../../../services/userService'
import _ from 'lodash';
import HomeFooter from '../../HomePage/HomeFooter'
<HomeFooter />
class DetailEvent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
            dataDetailEvent: {},
            listProvince: []
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            // let location = e.target.value

            let res = await getDetailEventById(id);
            
            if (res && res.errCode === 0) {             
                  this.setState({
                    dataDetailEvent: res.data,
                    
                })
            }
        }
    }

    componentDidUpdate(prevProps) {

    }

    handleOnChangeSelect = async (e) => {
        
    }

    render() {
        let { dataDetailEvent } = this.state
        console.log('check state: ', dataDetailEvent)
        return (
            <div className='detail-event-container'>
                <HomeHeader />
                <div className='detail-event-body'>
                    <div className='description-event'>
                        {/* {dataDetailEvent && !_.isEmpty(dataDetailEvent)
                            &&
                            <div dangerouslySetInnerHTML={{ __html: dataDetailEvent.descriptionHtml }}>

                            </div>
                        } */}
                        
                        <div>
                            <div>{dataDetailEvent.EventName}</div>
                            <p>{dataDetailEvent.Description}</p>
                        </div>
                    </div>
                    
                    {/* <div className='search-sp-doctor'>
                        <select onChange={(e) => this.handleOnChangeSelect(e)}>
                            {listProvince && listProvince.length > 0
                                && listProvince.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>
                                            {item.valueVi}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div> */}
                    {/* {arrDoctorId && arrDoctorId.length > 0 &&
                        arrDoctorId.map((item, index) => {
                            return (
                                <div className='each-doctor'>
                                    <div className='dt-content-left'>
                                        <div className='profile-doctor'>
                                            <ProfileDoctor
                                                doctorId={item}
                                                isShowDescriptionDoctor={true}
                                                isShowLinkDetail={true}
                                                isShowPrice={false}
                                            />
                                        </div>
                                    </div>
                                    <div className='dt-content-right'>
                                        <div className='doctor-schedule'>
                                            <DoctorSchedule
                                                doctorIdFromParent={item}
                                                key={index}
                                            />
                                        </div>
                                        <div className='doctor-extra-info'>
                                            <DoctorExtraInfo
                                                doctorIdFromParent={item}
                                            />
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    } */}
                </div>
                <HomeFooter />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
