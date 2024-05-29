import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";

const Step1 = (props) => {
  const { user, setUser, updateUser } = props;

  return (
    <Row>
      <Col span={12}>
        <Card 
          className="mr-2 ml-2" 
          style={{ minHeight: 200, cursor: 'pointer', background: user?.user_type == 'traveller' ? 'silver' : 'white' }} 
          onClick={() => {
            setUser({ ...user, user_type: 'traveller' });
            updateUser({...user, user_type: 'traveller'});
          }}
        >
          <h3>Traveller</h3>
          <p>Looking for activities to do while on vacation.</p>
        </Card>
      </Col>
      <Col span={12}>
        <Card 
          className="mr-2 ml-2" 
          style={{ minHeight: 200, cursor: 'pointer', background: user?.user_type == 'local' ? 'silver' : 'white' }}
          onClick={() => {
            setUser({ ...user, user_type: 'local' });
            updateUser({...user, user_type: 'local'});
          }}
        >
          <h3>Local</h3>
          <p>Offering activities for travellers to enjoy.</p>
        </Card>
      </Col>
    </Row>
  )
}

export default Step1;