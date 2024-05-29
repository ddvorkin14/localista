import React, { useState } from "react";
import { Form, Input, Row, Col as Column, Button } from 'antd';

const Step2 = (props) => {
  const { user, current, setCurrent } = props;
  const [currentUser, setCurrentUser] = useState(user);

  const formInitialValues = [
    {
      name: ['address1'],
      value: currentUser.address1
    },
    {
      name: ['address2'],
      value: currentUser.address2
    },
    {
      name: ['city'],
      value: currentUser.city
    },
    {
      name: ['provincestate'],
      value: currentUser.provincestate
    },
    {
      name: ['country'],
      value: currentUser.country
    },
    {
      name: ['postalcode'],
      value: currentUser.postalcode
    }
  ]

  return (
    <div className="p-4">
      <p className="mb-4">Select your destination city or enter your current location to find activities nearby.</p>
      <Form
        layout="vertical"
        variant="filled"
        style={{ textAlign: 'left' }}
        fields={formInitialValues}
      >
        <Form.Item
          label="Destination City"
          name="destinationCity"
        >
          <Input />
        </Form.Item>
        <h3 className="text-lg font-bold mb-5">OR</h3>
        <Row>
          <Column span={12}>
            <Form.Item
              style={{ marginBottom: '5px' }}
              label="Address 1"
              name="address1"
            >
              <Input 
                style={{ width: '95%' }} 
                // defaultValue={currentUser.address1} 
                onChange={(e) => setCurrentUser({ ...currentUser, address1: e.target.value })} 
              />
            </Form.Item>  
          </Column>
          <Column span={12}>
            <Form.Item
              style={{ marginBottom: '5px' }}
              label="Address 2"
              name="address2"
            >
              <Input 
                // defaultValue={user.address2}
                onChange={(e) => setCurrentUser({ ...currentUser, address2: e.target.value })}
              />
            </Form.Item>
          </Column>
        </Row>
        <Row>
          <Column span={12}>
            <Form.Item
              style={{ marginBottom: '5px' }}
              label="City"
              name="city"
            >
              <Input 
                style={{ width: '95%' }} 
                // defaultValue={user.city}
                onChange={(e) => setCurrentUser({ ...currentUser, city: e.target.value })}
              />
            </Form.Item>
          </Column>
          <Column span={12}>
            <Form.Item
              style={{ marginBottom: '5px' }}
              label="Province/State"
              name="provincestate"
            >
              <Input 
                // defaultValue={user.provincestate}
                onChange={(e) => setCurrentUser({ ...currentUser, provincestate: e.target.value })}
              />
            </Form.Item>
          </Column>
        </Row>
        <Row>
          <Column span={12}>
            <Form.Item
              style={{ marginBottom: '5px' }}
              label="Country"
              name="country"
            >
              <Input 
                style={{ width: '95%' }} 
                // defaultValue={user.country}
                onChange={(e) => setCurrentUser({ ...currentUser, country: e.target.value })}
              />
            </Form.Item>
          </Column>
          <Column span={12}>
            <Form.Item
              style={{ marginBottom: '5px' }}
              label="Postal Code"
              name="postalcode"
            >
              <Input 
                // defaultValue={user.postalcode}
                onChange={(e) => setCurrentUser({ ...currentUser, postalcode: e.target.value })}
              />
            </Form.Item>
          </Column>
        </Row>
      </Form>
      <Button type="primary" onClick={() => setCurrent(current + 1)}>Next</Button>
    </div>
  )
}

export default Step2;