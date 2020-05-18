import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={70}
          text="Javascript"
        />
        <ProgressBar
          percent={75}
          text="ReactJS"
        />
        <ProgressBar
          percent={75}
          text="Gatsby"
        />
        <ProgressBar
          percent={60}
          text="NodeJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Python"
        />
        <ProgressBar
          percent={60}
          text="Mysql"
        />
        <ProgressBar
          percent={60}
          text="MongoDB"
        />
        <ProgressBar
          percent={50}
          text="Flutter Dev"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
