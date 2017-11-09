import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import EventCalendar from './EventCalendar';
import YiwenActivities from './YiwenActivities';
import CommunityActivity from './CommunityActivity';

const DATA = [
  {
    id: 1,
    time: new Date(2017, 9, 18),
    value: 'This event its super cool',
  },
  {
    id: 2,
    time: new Date(2017, 9, 19),
    value: 'This event its super boring but you can come ',
  },
];

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <Carousel
          id='eventpage-slider'
          prevIcon={
            <span className='prev'>
              <i className='fa fa-chevron-left' />
            </span>
          }
          nextIcon={
            <span className='next'>
              <i className='fa fa-chevron-right' />
            </span>
          }
        >
          {[
            { imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510122171/mainpage/%E8%88%9E%E8%B9%88%E5%A4%A7%E8%B5%9B_bir4rj.jpg' },
            { imgsrc: 'http://res.cloudinary.com/cacicloud/image/upload/v1510128263/2017%E5%A4%8F%E4%BB%A4%E8%90%A5_itnwyq.png' },
          ].map((data, index) => {
            return (
              <Carousel.Item key={ index } animateIn={ true }>
                <img src={ data.imgsrc } alt='Carousel' />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div className='container' style={ { paddingRight: 0, paddingLeft: 0, width: '89%' } }>
          <EventCalendar data={ DATA } />
          <YiwenActivities />
          <CommunityActivity />
        </div>
      </div>
    );
  }
}
