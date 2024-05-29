import React, { useState } from "react";
import { Form, Input, Row, Col as Column, Button } from 'antd';

const Step2 = (props) => {
  const { user, setUser, current, setCurrent } = props;

  const formInitialValues = [
    {
      name: ['address1'],
      value: user?.address1
    },
    {
      name: ['address2'],
      value: user?.address2
    },
    {
      name: ['city'],
      value: user?.city
    },
    {
      name: ['provincestate'],
      value: user?.provincestate
    },
    {
      name: ['country'],
      value: user?.country
    },
    {
      name: ['postalcode'],
      value: user?.postalcode
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
        {user?.user_type === 'traveller' ? (
          <Form.Item
            label="Destination City"
            name="destinationCity"
          >
            <Input />
          </Form.Item>
        ) : (
          <>
            <Row>
              <Column span={12}>
                <Form.Item
                  style={{ marginBottom: '5px' }}
                  label="Address 1"
                  name="address1"
                >
                  <Input 
                    style={{ width: '95%' }} 
                    onChange={(e) => setUser({ ...user, address1: e.target.value })} 
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
                    onChange={(e) => setUser({ ...user, address2: e.target.value })}
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
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
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
                    onChange={(e) => setUser({ ...user, provincestate: e.target.value })}
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
                    onChange={(e) => setUser({ ...user, country: e.target.value })}
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
                    onChange={(e) => setUser({ ...user, postalcode: e.target.value })}
                  />
                </Form.Item>
              </Column>
            </Row>
          </>
        )}
      </Form>
      <Button type="primary" onClick={() => setCurrent(current + 1)}>Next</Button>
    </div>
  )
}

export default Step2;