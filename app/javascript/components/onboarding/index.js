import {
  Button,
  DatePicker,
  Form,
  Input,
  Collapse,
  Row,
  Col as Column,
  Space,
  Steps
} from 'antd';
import React from "react";
import Step1 from './step1';
import Step2 from './step2';

const Onboarding = (props) => {
  const { user } = props;
  const [current, setCurrent] = React.useState(0);

  const step1 = <Step1 user={user} current={current} setCurrent={setCurrent}/>
  const step2 = <Step2 user={user} current={current} setCurrent={setCurrent}/>

  const step3 = (
    <div className="p-4">
      <p>Choose from a variety of categories such as outdoor adventures, cultural experiences, or food and drink.</p>
    </div>
  )

  const step4 = (
    <div className="p-4">
      <p>Browse through the available activities, read reviews, and book your preferred experience.</p>
    </div>
  )

  const steps = [
    {
      key: '1',
      label: 'Step 1: Set your profile type',
      children: step1
    },
    {
      key: '2', 
      label: 'Step 2: Set your Location', 
      children: step2
    }, {
      key: '3', 
      label: 'Step 3: Choose your Interests', 
      children: step3
    }, {
      key: '4', 
      label: 'Step 4: Explore!', 
      children: step4
    }
  ]

  

  return (
    <>
      <div className="justify-center mt-8 mb-3">
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome to Localista {user.email}!</h1>
        <p className="text-sm font-bold mb-4 text-center">Let's get started with the onboarding process.</p>
        
        <div className="container mx-auto">
          <Steps
            current={current}
            items={[
              {
                title: 'User Type',
              },
              {
                title: 'Location',
              },
              {
                title: 'Interests',
              },
              {
                title: 'Explore!',
              },
            ]}
          />
          <div className="mb-4 mt-4">
            <Collapse 
              items={steps} 
              accordion={true}
              bordered={false} 
              defaultActiveKey={['1']}
              activeKey={current + 1}
              onChange={(key) => setCurrent(parseInt(key[0]) - 1)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Onboarding;