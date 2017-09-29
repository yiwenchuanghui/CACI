import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';

const sectionData = [
  {
    imgsrc: '../../assets/img/us.jpg',
    text1: '我們是藝文創薈',
    text2: '一群來自兩岸，熱愛藝術、科創的青年…',
    link: '',
  },
  {
    imgsrc: '../../assets/img/2017夏令营.png',
    text1: '',
    text2: '',
    link: '',
  },
  {
    imgsrc: '../../assets/img/舞蹈大赛.jpg',
    text1: '',
    text2: '',
    link: '',
  },
];

export default class Section1 extends Component {
  render() {
    return (
        <section className="no-margin">
        <Carousel id="main-slider"
          prevIcon={<a className="prev hidden-xs" href="#carousel-home" data-slide="prev"><i className="fa fa-chevron-left"></i></a>}
          nextIcon={<a className="next hidden-xs" href="#carousel-home" data-slide="next"><i className="fa fa-chevron-right"></i></a>}
        >
          {
            sectionData.map((data, index) => {
              return (
                <Carousel.Item key={index} animateIn={true}>
                  <img src={data.imgsrc}/>
                  <Carousel.Caption>
                    <h1 className="animation animated-item-1">{data.text1}</h1>
                    <h4 className="animation animated-item-2">{data.text2}</h4>
                    <a className="btn-slide animation animated-item-3" href={data.link}>Read More</a>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </section>


    );
  }
}