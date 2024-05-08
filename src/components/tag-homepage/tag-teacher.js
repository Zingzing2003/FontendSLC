import React from 'react';
import "./tag-teacher.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck ,faMessage} from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';

const TagTeacher = ({ date, description, imageSrc }) => {
  return (
    <div className="tag-teacher">
      <section className="masked-doctor-image">
        <img
          className="img-teacher-content"
          loading="lazy"
          alt=""
          // src={imageSrc}
          src='https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/41982647_164903614388709_2031902075155120128_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFlYJ3cpSfcn3UfMLiGzK85_5UJmLo11jT_lQmYujXWNDjzafkD8rJdVsESxCgkTZMca3IHRWqAQXA9RgrorY7z&_nc_ohc=30yxq15jhRkAb5VQBev&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBiKOvK25CFSdsa4JlTeIgrra7d81-5dWugu1OK1rDLyQ&oe=664438BD'
        />
      </section>
      <section className='container'>
        <div className='content-container'>
        <p className="txt-content name-content  ">
          {description}
        </p>
        <p className=" txt-content position-content  ">
          {/* {description}           */}
          Giáo viên
        </p>
        <p className="txt-content description-content ">
          {/* {description}  */}
          Với kiến thức , kĩ năng và sự yêu nghề tôi sẽ giúp các bạn có thể giao tiếp tiếng anh 
        </p>
        <div className='btn-container'>
          <button className="btn" >
            <FontAwesomeIcon
              className='icon'
              icon={faMessage}
              // style={{ color: "#74C0FC", }}
              flip="horizontal"
              size="2xs"
            />
            <p className='btn-txt'>Thành tích</p>
          </button>
          <button className="btn chat-btn" >
            <FontAwesomeIcon
              className='icon'
              icon={faRocketchat}
              size="2xs"
              // style={{ color: "#74C0FC", }}
            />
            <p className='btn-txt'>Tư vấn</p>
          </button>
        </div>
        </div>
      </section >
    </div >
  );
};

export default TagTeacher;