import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";

const Step1 = (props) => {
  const { user, current, setCurrent } = props;
  const [selectedUserType, setSelectedUserType] = React.useState(user.userType);
  const [currentUser, setCurrentUser] = React.useState(user);

  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
  useEffect(() => {
    if(currentUser){
      fetch('/users/' + user.id, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({ user: { ...currentUser, id: undefined, email: undefined, created_at: undefined, updated_at: undefined } })
      }).then(response => {
        if (response.ok) {
          response.json().then(data => {
            setCurrentUser(data.user);
          });
        }
      }).catch(error => {
        console.error('There was an error!', error);
      });
    }
  }, [currentUser]);

  return (
    <Row>
      <Col span={12}>
        <Card 
          className="mr-2 ml-2" 
          style={{ minHeight: 200, cursor: 'pointer', background: selectedUserType == 'traveller' ? 'silver' : 'white' }} 
          onClick={() => {
            setSelectedUserType('traveller');
            setCurrentUser({ ...currentUser, user_type: 'traveller' });
          }}
        >
          <h3>Traveller</h3>
          <p>Looking for activities to do while on vacation.</p>
        </Card>
      </Col>
      <Col span={12}>
        <Card 
          className="mr-2 ml-2" 
          style={{ minHeight: 200, cursor: 'pointer', background: selectedUserType == 'local' ? 'silver' : 'white' }}
          onClick={() => {
            setSelectedUserType('local');
            setCurrentUser({ ...currentUser, user_type: 'local' });
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