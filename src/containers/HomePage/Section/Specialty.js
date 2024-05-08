import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import specialtyImg from '../../../assets/specialty/than-kinh.jpg'
import { getAllSpecialty } from '../../../services/userService'
import { getAllCourses ,getAllEvents} from '../../../services/userService'//
import { withRouter } from 'react-router'
import TagSpecialty from '../../../components/tag-homepage/tag-specialty';
import Loading from '../../../components/loading/loading'

class Specialty extends Component {

    constructor(props) {
        super(props)
        this.sliderRef = React.createRef(); // Tạo một tham chiếu
        this.state = {
            dataCourses: [],
            isLoading: true,
        }
    }

    async componentDidMount() {
        //let res = await getAllSpecialty()
        let res = await getAllEvents()
        console.log(res);
        console.log('check res: ', res)
        // this.props.settings && this.setState({ isLoading: false });
        if (res && res.errCode === 0) {
            this.setState({
                dataCourses: res.data ? res.data : []
            })
        }
        this.props.settings && this.setState({ isLoading: false });
    }

    handleViewDetailSpecialty = (item) => {
        if (this.props.history) {
            this.props.history.push(`/detail-event/${item.ID}`)
        }
    }

    render() {
        let { dataCourses,isLoading  } = this.state;

        // const settings = {
        //     // dots: true, // Hiển thị chấm tròn chỉ số
        //     infinite: true, // Cho phép cuộn vô hạn
        //     speed: 500, // Tốc độ cuộn (ms)
        //     slidesToShow: 5, // Số lượng slide hiển thị trên mỗi lần cuộn
        //     slidesToScroll: 3 // Số lượng slide cuộn mỗi lần
        // };
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (<div className='section-share section-course'>
                    {/* <div className='section-container'> */}

                    <div className='section-header'>
                        <span className='title-section'>Sự kiện thường niên</span>
                    </div>
                    <div className='section-body'>

                        {dataCourses && dataCourses.length > 0 &&
                            dataCourses.map((item, index) => {
                                return (
                                    <div
                                        className='section-customize ' key={index}
                                        onClick={() => this.handleViewDetailSpecialty(item)}
                                    >
                                        <TagSpecialty
                                            date="12/03/2024"
                                            description={item.EventName}
                                            imageSrc={item.EventImage}
                                        />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                )}
            </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Specialty));
