import React from "react";
import Arrow from "../../assets/img/rightarrow.svg";
import Insta from "../../assets/img/insta.svg";
import Linkedin from "../../assets/img/linkedin.svg";
import Discord from "../../assets/img/discord.svg";
import Github from "../../assets/img/github.svg";
import Me from "../../assets/img/me.png";
import About from "../../assets/img/about.png";
import Navbar from "../../components/Navbar";
import AboutGif from "../../assets/img/about.gif";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Index = () => {
  const handleClick = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -100,
      duration: 1200,
    });
  };
  return (
    <>
      <Navbar handleClick={handleClick} />
      <div className="introduction-section-wrap">
        <div className="absolute-circle"></div>
        <div className="introduction-section | container">
          <div className="introduction-section__content">
            <h1 className="heading | primary">
              Hello I am <br /> <span>Dhairya Marwah</span>
            </h1>
            <h2 className="sub-heading | primary">
              Software Developer, <br /> Freelancer, UI/Ux Designer
            </h2>
            <p className="paragraph | introduction-paragraph">
              <div className="paragraph-line"></div> Self-taught software
              developer with in-depth knowledge of development methodologies and
              practices, including agile development, object-oriented Analysis
              and UI/UX.
            </p>
            <div className="btns">
              <button
                style={{ color: "#fff", backgroundColor: "#FDB400" }}
                className="btn | primary"
              >
                Projects <img src={Arrow} alt="" />{" "}
              </button>
              <button
                style={{
                  color: "#fff",
                  border: "1.3px  solid #FDB400",
                  backgroundColor: "transparent",
                }}
                className="btn | secondary"
              >
                Hire me
              </button>
            </div>
            <div className="socials">
              <a href="https://www.instagram.com/dhairyamarwah_/">
                <img src={Insta} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/dhairyamarwah/">
                <img src={Linkedin} alt="" />
              </a>
              <a href="https://github.com/DhairyaMarwah">
                <img src={Github} alt="" />
              </a>
              <a href="https://www.instagram.com/dhairyamarwah_/">
                <img src={Discord} alt="" />
              </a>
            </div>
          </div>
          <div className="introduction-section__image">
            <img src={Me} alt="" />
          </div>
          <div className="beunique-img">
            <svg
              width="629"
              height="132"
              viewBox="0 0 629 132"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M21.586 40.233C23.549 37.0431 26.3708 34.4667 30.0514 32.5037C33.732 30.5407 37.9443 29.5592 42.6882 29.5592C48.3318 29.5592 53.4437 30.9906 58.024 33.8533C62.6043 36.716 66.2031 40.8055 68.8205 46.122C71.5196 51.4384 72.8691 57.6136 72.8691 64.6477C72.8691 71.6817 71.5196 77.8979 68.8205 83.2961C66.2031 88.6125 62.6043 92.743 58.024 95.6875C53.4437 98.5501 48.3318 99.9815 42.6882 99.9815C37.8625 99.9815 33.6502 99.0409 30.0514 97.1597C26.4526 95.1967 23.6308 92.6203 21.586 89.4304V99H0.606584V8.21174H21.586V40.233ZM51.5216 64.6477C51.5216 59.413 50.0494 55.3235 47.1049 52.379C44.2422 49.3527 40.6843 47.8396 36.4311 47.8396C32.2598 47.8396 28.7019 49.3527 25.7574 52.379C22.8947 55.4053 21.4633 59.5357 21.4633 64.7704C21.4633 70.005 22.8947 74.1355 25.7574 77.1617C28.7019 80.188 32.2598 81.7012 36.4311 81.7012C40.6025 81.7012 44.1604 80.188 47.1049 77.1617C50.0494 74.0537 51.5216 69.8823 51.5216 64.6477ZM145.955 63.6662C145.955 65.6292 145.832 67.674 145.587 69.8005H98.1072C98.4343 74.0537 99.7839 77.3253 102.156 79.6155C104.61 81.8238 107.595 82.928 111.112 82.928C116.347 82.928 119.986 80.7197 122.031 76.3029H144.36C143.215 80.8015 141.129 84.8501 138.103 88.4489C135.159 92.0477 131.437 94.8695 126.939 96.9143C122.44 98.9591 117.41 99.9815 111.848 99.9815C105.141 99.9815 99.1704 98.5501 93.9358 95.6875C88.7012 92.8248 84.6116 88.7352 81.6671 83.4188C78.7226 78.1023 77.2504 71.8862 77.2504 64.7704C77.2504 57.6545 78.6817 51.4384 81.5444 46.122C84.4889 40.8055 88.5785 36.716 93.8131 33.8533C99.0478 30.9906 105.059 29.5592 111.848 29.5592C118.473 29.5592 124.362 30.9497 129.515 33.7306C134.668 36.5115 138.676 40.4784 141.538 45.6312C144.483 50.7841 145.955 56.7957 145.955 63.6662ZM124.485 58.1453C124.485 54.5465 123.258 51.6838 120.804 49.5572C118.35 47.4306 115.283 46.3673 111.603 46.3673C108.086 46.3673 105.1 47.3897 102.647 49.4345C100.275 51.4793 98.8024 54.3829 98.2298 58.1453H124.485ZM245.715 30.5407V99H224.735V89.6758C222.609 92.7021 219.705 95.1558 216.025 97.037C212.426 98.8364 208.418 99.7361 204.001 99.7361C198.767 99.7361 194.145 98.591 190.138 96.3009C186.13 93.9289 183.022 90.5346 180.813 86.1179C178.605 81.7012 177.501 76.5074 177.501 70.5367V30.5407H198.358V67.7149C198.358 72.2952 199.544 75.8531 201.916 78.3886C204.287 80.9241 207.477 82.1919 211.485 82.1919C215.575 82.1919 218.805 80.9241 221.177 78.3886C223.549 75.8531 224.735 72.2952 224.735 67.7149V30.5407H245.715ZM300.044 29.8046C308.059 29.8046 314.439 32.4219 319.183 37.6566C324.009 42.8094 326.422 49.9253 326.422 59.0041V99H305.565V61.8259C305.565 57.2456 304.379 53.6877 302.007 51.1521C299.635 48.6166 296.445 47.3488 292.437 47.3488C288.43 47.3488 285.24 48.6166 282.868 51.1521C280.496 53.6877 279.31 57.2456 279.31 61.8259V99H258.33V30.5407H279.31V39.6196C281.436 36.5933 284.299 34.2213 287.898 32.5037C291.497 30.7043 295.545 29.8046 300.044 29.8046ZM349.098 23.4249C345.417 23.4249 342.391 22.3616 340.019 20.235C337.729 18.0267 336.584 15.3276 336.584 12.1377C336.584 8.86607 337.729 6.16696 340.019 4.04038C342.391 1.83202 345.417 0.727837 349.098 0.727837C352.696 0.727837 355.641 1.83202 357.931 4.04038C360.303 6.16696 361.489 8.86607 361.489 12.1377C361.489 15.3276 360.303 18.0267 357.931 20.235C355.641 22.3616 352.696 23.4249 349.098 23.4249ZM359.526 30.5407V99H338.546V30.5407H359.526ZM368.104 64.8931C368.104 58.1044 369.495 52.0518 372.276 46.7354C375.138 41.419 378.942 37.2885 383.686 34.344C388.511 31.3178 393.746 29.8046 399.39 29.8046C403.725 29.8046 407.61 30.5816 411.045 32.1357C414.48 33.6079 417.261 35.6936 419.388 38.3927V30.5407H440.367V131.635H419.388V90.4119C417.016 93.2746 414.112 95.5648 410.677 97.2824C407.323 99 403.479 99.8588 399.144 99.8588C393.582 99.8588 388.43 98.3866 383.686 95.4421C378.942 92.4976 375.138 88.3671 372.276 83.0507C369.495 77.7343 368.104 71.6817 368.104 64.8931ZM419.388 64.7704C419.388 61.0898 418.651 58.0226 417.179 55.5689C415.789 53.0333 413.948 51.1521 411.658 49.9253C409.368 48.6166 406.955 47.9623 404.42 47.9623C401.966 47.9623 399.594 48.6166 397.304 49.9253C395.014 51.1521 393.133 53.0333 391.66 55.5689C390.188 58.1044 389.452 61.2125 389.452 64.8931C389.452 68.5737 390.188 71.6817 391.66 74.2173C393.133 76.671 395.014 78.5522 397.304 79.8609C399.594 81.0877 401.966 81.7012 404.42 81.7012C406.873 81.7012 409.245 81.0877 411.536 79.8609C413.908 78.5522 415.789 76.6301 417.179 74.0946C418.651 71.559 419.388 68.451 419.388 64.7704ZM520.691 30.5407V99H499.712V89.6758C497.585 92.7021 494.682 95.1558 491.001 97.037C487.402 98.8364 483.395 99.7361 478.978 99.7361C473.743 99.7361 469.122 98.591 465.114 96.3009C461.107 93.9289 457.998 90.5346 455.79 86.1179C453.582 81.7012 452.478 76.5074 452.478 70.5367V30.5407H473.334V67.7149C473.334 72.2952 474.52 75.8531 476.892 78.3886C479.264 80.9241 482.454 82.1919 486.462 82.1919C490.551 82.1919 493.782 80.9241 496.154 78.3886C498.526 75.8531 499.712 72.2952 499.712 67.7149V30.5407H520.691ZM597.84 63.6662C597.84 65.6292 597.718 67.674 597.472 69.8005H549.992C550.32 74.0537 551.669 77.3253 554.041 79.6155C556.495 81.8238 559.48 82.928 562.997 82.928C568.232 82.928 571.872 80.7197 573.916 76.3029H596.245C595.1 80.8015 593.015 84.8501 589.988 88.4489C587.044 92.0477 583.322 94.8695 578.824 96.9143C574.325 98.9591 569.295 99.9815 563.733 99.9815C557.027 99.9815 551.056 98.5501 545.821 95.6875C540.587 92.8248 536.497 88.7352 533.552 83.4188C530.608 78.1023 529.136 71.8862 529.136 64.7704C529.136 57.6545 530.567 51.4384 533.43 46.122C536.374 40.8055 540.464 36.716 545.698 33.8533C550.933 30.9906 556.945 29.5592 563.733 29.5592C570.359 29.5592 576.247 30.9497 581.4 33.7306C586.553 36.5115 590.561 40.4784 593.424 45.6312C596.368 50.7841 597.84 56.7957 597.84 63.6662ZM576.37 58.1453C576.37 54.5465 575.143 51.6838 572.69 49.5572C570.236 47.4306 567.169 46.3673 563.488 46.3673C559.971 46.3673 556.986 47.3897 554.532 49.4345C552.16 51.4793 550.688 54.3829 550.115 58.1453H576.37ZM616.269 99.9815C612.589 99.9815 609.562 98.9182 607.19 96.7916C604.9 94.5833 603.755 91.8842 603.755 88.6943C603.755 85.4227 604.9 82.6827 607.19 80.4743C609.562 78.2659 612.589 77.1617 616.269 77.1617C619.868 77.1617 622.813 78.2659 625.103 80.4743C627.475 82.6827 628.661 85.4227 628.661 88.6943C628.661 91.8842 627.475 94.5833 625.103 96.7916C622.813 98.9182 619.868 99.9815 616.269 99.9815Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="rest-sections-wrap">
        <div className="rest-sections-wrap-background">
          <div className="about-gif">
            <img src={AboutGif} alt="" />
          </div>
          <div className="about-section | container">
            <div className="about-section__left">
              <h1 className="heading | about-heading">
                About <br /> <span> me</span>
              </h1>
              <p className="paragraph | about-paragraph">
                I have been working as a Developer for the past two years having
                gained extensive experience in developing software solutions. I
                am able to identify business requirements that align with
                development goals and deliver solutions that effectively meet
                those requirements. I am comfortable working on projects that
                require both frontend and backend development.
              </p>
            </div>
            <div className="about-section__right">
              <img src={About} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
