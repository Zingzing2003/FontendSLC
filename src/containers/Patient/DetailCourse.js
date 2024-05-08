import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import './DetailCourse.scss'
import { getDetailCourse } from '../../services/userService'
import HomeFooter from '../HomePage/HomeFooter'
import { Button } from 'reactstrap';

class DetailCourse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            detailCourse: {},
            currentCourseId: -1
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            this.setState({
                currentCourseId: id
            })
            let res = await getDetailCourse(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailCourse: res.data
                })
            }
        }
    }

    componentDidUpdate(prevProps) {

    }

    render() {
        console.log(this.props.match.params.id)
        let { detailCourse } = this.state
        // let name = ''
        // if (detailCourse && detailCourse.data) {
        //     name = `${detailCourse.name}`

        // }
        return (
            <div>
                {/* section-featured */}
                <HomeHeader isShowBanner={false} />
                <div className='detail-handbook-container'>
                    {/* ===========================================================================      */}
                    <div className="section-featured featured-image" style={{ backgroundImage: "url(https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/123919576_658501861695546_6309839274993645169_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHOM8KHDibdElmL7Q1R9K2Lizn_Yx5Hj2aLOf9jHkePZiLsA-EquaczbemjVCdYEXMEL3grjx24PFf2wdBmxr32&_nc_ohc=-Afbhka3jQMQ7kNvgE2BcO7&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBxWNNF-rbP2jRSOxBM7h7VamUdZ5Mp9oZelXb8OCFprQ&oe=66615555)" }}>
                    
                    </div>
                    {/* ===================================== */}
                    <div className="section-post wrap">
                        <div className="post-wrap ">
                            <h1 className="white">{detailCourse.CourseName}</h1>
                            <div >{detailCourse.Description}</div>
                            <div> Giá : 200$</div>
                            {detailCourse &&
                                detailCourse.contentHtml &&
                                <div dangerouslySetInnerHTML={{ __html: detailCourse.contentHtml }}></div>
                            }
                            <div style={{marginTop:"20px"}} > 
                            <Button className='btn btn-primary'style={{background:"#f35311", width:"40%",borderRadius: "50px"}}> Đăng kí khóa học</Button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse);
