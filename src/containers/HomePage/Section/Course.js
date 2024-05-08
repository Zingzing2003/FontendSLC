import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import * as actions from '../../../store/actions'
import { withRouter } from 'react-router-dom';
import TagHandbook from '../../../components/tag-homepage/tag-Course';
import handbook_sample from '../../../assets/handbook/course-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../../components/loading/loading';
import { getAllCourses } from '../../../services/userService'//

class Course extends Component {
    constructor(props) {
        super(props)
        this.sliderRef = React.createRef(); // Tạo một tham chiếu
        this.state = {
            arrCourse: [],
            isLoading: true,

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.handbookHomeRedux !== this.props.handbookHomeRedux) {
            this.setState({
                arrCourse: this.props.handbookHomeRedux
            })
        }
    }

    async componentDidMount() {
        await this.props.getCourse();
        this.props.settings && this.setState({ isLoading: false });

        //new
        let res = await getAllCourses()
        
        // this.props.settings && this.setState({ isLoading: false });
        if (res && res.errCode === 0) {
            this.setState({
                arrCourse: res.data ? res.data : []
            })
        }
    }

    handleViewDetailCourse = (course) => {
        if (this.props.history) {
            this.props.history.push(`/detail-course/${course.CourseId}`)
        }
    }
    handleViewCourseMore = () => {
        if (this.props.history) {
            this.props.history.push(`/course_more`)
        }
    }
    render() {
        let { arrCourse, isLoading } = this.state;
        console.log("che", arrCourse);
        const settings = {
            // dots: true, // Hiển thị chấm tròn chỉ số
            infinite: true, // Cho phép cuộn vô hạn
            speed: 500, // Tốc độ cuộn (ms)
            slidesToShow: 3, // Số lượng slide hiển thị trên mỗi lần cuộn
            slidesToScroll: 1 // Số lượng slide cuộn mỗi lần
        };
        // console.log('handbookHomeRedux::::::', this.props.handbookHomeRedux)
        return (
            <>
                {isLoading ? (<Loading />) :
                    (
                        <div className='section-share section-handbook'>
                            <div className='section-container'>
                                <div className='section-header'>
                                    <span className='title-section'>Khóa học</span>
                                    <button className='btn-section' onClick={() => this.handleViewCourseMore()}>Xem thêm</button>
                                </div>
                                <div className='section-body'>
                                    <Slider ref={this.sliderRef} {...settings}>
                                        {arrCourse && arrCourse.length > 0 &&
                                            arrCourse.map((item, index) => {
                                                let imageBase64 = ''
                                                if (item.image) {
                                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                                }
                                                let name = `${item.name}`
                                                let desc = `${item.Description}`
                                                return (
                                                    <div className='section-customize' key={index}
                                                        onClick={() => this.handleViewDetailCourse(item)}
                                                    >
                                                        <TagHandbook
                                                            date="12/03/2024"
                                                            description={item.CourseName}
                                                            d2={item.Description}
                                                            imageSrc={handbook_sample}
                                                        />
                                                    </div>
                                                )
                                            })}
                                    </Slider>
                                    <button className="custom-prevArrow" onClick={() => this.sliderRef.current.slickPrev()}>
                                        <FontAwesomeIcon
                                            className='icon'
                                            icon={faChevronRight}
                                            flip="horizontal"
                                            size="2xs"
                                        />
                                    </button>
                                    <button className="custom-nextArrow" onClick={() => this.sliderRef.current.slickNext()}>
                                        <FontAwesomeIcon
                                            className='icon'
                                            icon={faChevronRight}
                                            flip="vertical"
                                            size="2xs"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        handbookHomeRedux: state.admin.handbookHome
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCourse: () => dispatch(actions.getCourse())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Course));
