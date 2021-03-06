import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export const OurFeatures = props => {
  return (
    <section id='feature'>
      <div className='container'>
        <div className='center'>
          <h2>我們的特點</h2>
          <p className='lead'>Our Features</p>
          <p className='lead'>
            藝文創薈由一群來自兩岸，熱愛藝術、科創的青年發起，自成立之初即希望透過各項不同類型的活動積極推廣現當代藝文創作、科技創新的最新發展，推動藝術、文化、創意融於生活，同時通過對傳統文化的研習、傳承、發展，為現當代藝術提供吸養，遂步促進兩岸之間的藝文、科創交流和跨領域的對話，匯聚各界專才，建立交流平台，鼓勵本地藝文創作、科技創新。
            <br />{' '}
            同時促進各地文化、科創界別對外交流，為各地多元文化發展、文化藝術創作、科技創新培養有為人才。
            業務包括國內外文化項目融資、演出製作及仲介、藝術文化教育、活動訂制、文化項目諮詢、文創孵化六大範疇，致力於促進由創作人、投資人、演藝人、文化消費群四大群體所組成的兩岸文化鏈條，打造當代的中國藝術文化的品牌。
          </p>
        </div>

        <div className='features'>
          <Row>
            <Col md={ 4 } sm={ 6 }>
              <div className='feature-wrap'>
                <i className='fa fa-bullhorn' />
                <h3>熱愛藝術與科創</h3>
                <h4>Keen on art and science</h4>
              </div>
            </Col>

            <Col md={ 4 } sm={ 6 }>
              <div className='feature-wrap'>
                <i className='fa fa-comments' />
                <h3>推廣創作與創新</h3>
                <h4>Promote creation and innovation</h4>
              </div>
            </Col>

            <Col md={ 4 } sm={ 6 }>
              <div className='feature-wrap'>
                <i className='fa fa-cloud-download' />
                <h3>研習、傳承和發展傳統文化</h3>
                <h4>Research, inherit and develop traditional culture</h4>
              </div>
            </Col>

            <Col md={ 4 } sm={ 6 }>
              <div className='feature-wrap'>
                <i className='fa fa-leaf' />
                <h3>促進兩岸文化交流</h3>
                <h4>Enhance cross-straits cutural exchange</h4>
              </div>
            </Col>

            <Col md={ 4 } sm={ 6 }>
              <div className='feature-wrap'>
                <i className='fa fa-cogs' />
                <h3>提供創作平台</h3>
                <h4>Provide platform for you</h4>
              </div>
            </Col>

            <Col md={ 4 } sm={ 6 }>
              <div className='feature-wrap'>
                <i className='fa fa-heart' />
                <h3>培養藝術有為人才</h3>
                <h4>Cultivate new talents</h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
