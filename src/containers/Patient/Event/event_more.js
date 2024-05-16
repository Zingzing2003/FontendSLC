import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import specialtyImg from '../../../assets/specialty/than-kinh.jpg'
import { getAllSpecialty } from '../../../services/userService'
import { withRouter } from 'react-router'
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter'
import './event_more.scss';
import ex from '../../../assets/course/course-2.jpg'
class event_more extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSpecialty: []
        }
    }

    // async componentDidMount() {
    //     let res = await getAllSpecialty()
    //     console.log('check res: ', res)
    //     if (res && res.errCode === 0) {
    //         this.setState({
    //             dataSpecialty: res.data ? res.data : []
    //         })
    //     }
    // }

    handleViewDetailEvent = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-event/${item.id}`)
        }
    }

    render() {
        let { dataSpecialty } = this.state
        return (
            <div className='event-more'>
                <HomeHeader />
                <div className='event-more-container'>
                    <div className='header'>
                        <b> Event </b>
                    </div>
                    
                    <div class=" d-flex flex-column justify-content-center align-items-center " style={{background:"white"}}>
                        <img src={ex} class="pt-5"  />
                        <h4>Dã ngoại</h4>
                        <p>Những chuyến dã ngoại thú vị</p>
                    </div>
                    <div class=" d-flex flex-column justify-content-center align-items-center " style={{background:"white"}}>
                        <img src={ex}  class="pt-5" />
                        <h4>Tết</h4>
                        <p>Ngày tết Việt Nam các bạn nhỏ được trải nghiệm không khí tết tại SLC.</p>
                    </div>
                    <div class=" d-flex flex-column justify-content-center align-items-center " style={{background:"white"}}>
                        <img src={ex}  class="pt-5" />
                        <h4>hallowen</h4>
                        <p>Lễ hallowen hàng năm được tổ chức cho các bé hóa trang </p>
                    </div>
                 </div>
                <HomeFooter />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(event_more));
