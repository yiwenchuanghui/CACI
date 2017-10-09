import React, { Component } from 'react';
import ResourceSection from './ResourceSection';
import { Project } from './Project';
import { Group } from './Group';
import { Process } from './Process';
import { Partners } from './Partners';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';

export default class SpacePage extends Component {
  render() {
    return (
      <div>
        <div className='ywspacetop'>
          <div className='center space-txt'>
            <h1>場地扶持計劃</h1>
          </div>
        </div>
        <Project />
        <Group />
        <Process />
        <Partners />
        <ResourceSection />

        <section className='space' id='conatcat-info'>
          <div className='container'>
            <Row>
              <Col sm={ 8 }>
                <div
                  className='media contact-info wow fadeInDown'
                  data-wow-duration='1000ms'
                  data-wow-delay='600ms'
                >
                  <div className='pull-left'>
                    <i className='fa fa-phone' />
                  </div>
                  <div className='media-body'>
                    <h2>想要聯繫我們？</h2>
                    <p>
                      連絡人：林先生 (010-5356 7027)
                      <br />微信號：藝文君 （caci-wechat)
                      <br />查詢電郵：ywchwx@126.com
                      <br />辦公地址：海澱區四道口路2號京果商廈A座5015藝聚場 （北京）
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}