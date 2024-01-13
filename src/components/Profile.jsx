import Photo from "../assets/PHOTO.jpg";
import "boxicons";

const Profile = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="cover cover-left"></div>
        <div className="cover cover-right turn"></div>

        <div className="book">
          <div className="book-page page-left">
            <div className="profile-page">
              <img src={Photo} alt="" />
              <h1>Jittapol Srisawang</h1>
              <h3>Full Stack Developer</h3>
              <div className="social-media">
                <a href="#">
                  <box-icon type="logo" name="github"></box-icon>
                </a>
                <a href="#">
                  <box-icon name="linkedin-square" type="logo"></box-icon>
                </a>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                beatae sit nostrum vero sint voluptate excepturi aut ducimus
                illo! Deleniti in eos ipsa harum, fugiat asperiores ipsum
                similique id aliquam!
              </p>

              <div className="btn-box">
                <a href="" className="btn">
                  Download CV
                </a>
                <a href="" className="btn contact-me">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="book-page page-right" id="turn-1">
            <div className="page-front">
              <h1 className="title">Work Experience</h1>
              <div className="workeduc-box">
                <div className="workeduc-content">
                  <span className="year">
                    <box-icon name="calendar" type="solid"></box-icon> 2023-Now
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor eveniet tempore quam omnis! Maxime officia, quo
                    ratione numquam hic illo voluptates temporibus enim rerum
                    velit consequuntur est, accusantium maiores! Consequatur!
                  </p>
                </div>

                <div className="workeduc-content">
                  <span className="year">
                    <box-icon name="calendar" type="solid"></box-icon> 2022-2023
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor eveniet tempore quam omnis! Maxime officia, quo
                    ratione numquam hic illo voluptates temporibus enim rerum
                    velit consequuntur est, accusantium maiores! Consequatur!
                  </p>
                </div>

                <div className="workeduc-content">
                  <span className="year">
                    <box-icon name="calendar" type="solid"></box-icon> 2020-2022
                  </span>
                  <h3>Web Developer - Company</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor eveniet tempore quam omnis! Maxime officia, quo
                    ratione numquam hic illo voluptates temporibus enim rerum
                    velit consequuntur est, accusantium maiores! Consequatur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
