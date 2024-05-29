import React, { useState } from 'react';
import Details from './details';
import ActivityInterests from './activityInterests';
import LocationInterests from './locationInterests';

const Profile = (props) => {
  const { current_user, user_interests } = props;
  const [interests, setInterests] = useState([]);
  const [locationInterests, setLocationInterests] = useState([]);
  const [userInterests, setUserInterests] = useState(user_interests);
  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(false);
  const [locationQuery, setLocationQuery] = useState('');
  const [showLocationList, setLocationShowList] = useState(false);


  React.useEffect(() => {
    fetch('/interests', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      credentials: 'same-origin'
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          // setInterests(data.activities);
          // setLocationInterests(data.locations);
          setInterests(data?.activities.filter(interest => interest.kind === 'activity' && !userInterests.some(userInterest => userInterest.id === interest.id)));
          setLocationInterests(data?.locations.filter(interest => interest.kind === 'location' && !userInterests.some(userInterest => userInterest.id === interest.id)));
        });
      } else {
        console.error('Error fetching interests:', response);
      }
    }).catch(error => console.error('Error fetching interests:', error));
  }, []);

  const [formData, setFormData] = useState({
    firstName: current_user?.first_name,
    lastName: current_user?.last_name,
    email: current_user?.email,
    address1: current_user?.address1,
    address2: current_user?.address2,
    city: current_user?.city,
    country: current_user?.country,
    postalCode: current_user?.postalcode,
    phone: current_user?.phone
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted:', formData);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);

    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      credentials: 'same-origin',
      body: JSON.stringify({ query: query, location_query: locationQuery })
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          setInterests(data);
        });
      } else {
        console.error('Error searching:', response);
      }
    }
    ).catch(error => console.error('Error searching:', error));
  };

  const addToProfile = (e) => {
    let interest = interests.find(interest => interest.name === e.target.innerText);
    
    if(!interest){
      interest = locationInterests.find(interest => interest.name === e.target.innerText);
    }
    
    fetch('/interests/add_interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      },
      credentials: 'same-origin',
      body: JSON.stringify({ interest_id: interest.id, user_id: current_user.id })
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          setUserInterests(data.interests);
          setInterests(prevInterests => {
            let filteredInterests = prevInterests.filter(
              interest => !data.interests.some(userInterest => userInterest.id === interest.id)
            );
            return filteredInterests;
          });
          setLocationInterests(prevInterests => {
            let filteredInterests = prevInterests.filter(
              interest => !data.interests.some(userInterest => userInterest.id === interest.id)
            );
            return filteredInterests;
          });
        });
      } else {
        console.error('Error adding interest:', response);
      }
    }).catch(error => console.error('Error adding interest:', error));
  };

  const removeInterest = (e) => {
    const interest = userInterests.find(interest => interest.name === e.target.dataset.name);
    
    // add confirm before removing
    if (confirm('Are you sure you want to remove this interest?')) {
      fetch('/interests/remove_interest', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
        },
        credentials: 'same-origin',
        body: JSON.stringify({ interest_id: interest.id, user_id: current_user.id })
      }).then(response => {
        if (response.ok) {
          response.json().then(data => {
            setUserInterests(data.interests);
          });
        } else {
          console.error('Error removing interest:', response);
        }
      }).catch(error => console.error('Error removing interest:', error));
    }
  }

  const labelClass = "block text-sm font-medium text-gray-700"
  const inputClass = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  const buttonClass = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 w-full rounded"
  const inputs = [
    { label: 'First Name', name: 'firstName', value: formData.firstName },
    { label: 'Last Name', name: 'lastName', value: formData.lastName },
    { label: 'Email', name: 'email', value: formData.email },
    { label: 'Address 1', name: 'address1', value: formData.address1 },
    { label: 'Address 2', name: 'address2', value: formData.address2 },
    { label: 'City', name: 'city', value: formData.city },
    { label: 'Country', name: 'country', value: formData.country },
    { label: 'Postal Code', name: 'postalCode', value: formData.postalCode },
    { label: 'Phone', name: 'phone', value: formData.phone }
  ]

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-2 rounded-lg">
        <div className="col-span-1"></div>
        <Details 
          labelClass={labelClass} inputClass={inputClass} buttonClass={buttonClass}
          inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit}
        />
        
        <div className="col-span-12 sm:col-span-8 p-4 rounded-lg">
          <ActivityInterests 
            activityInterests={userInterests} 
            removeInterest={removeInterest}
            inputClass={inputClass}
            buttonClass={buttonClass}
            handleSearch={handleSearch}
            query={query}
            setShowList={setShowList}
            showList={showList}
            allInterests={interests}
            addToProfile={addToProfile}
          />
          
          <hr/>
          
          <LocationInterests
            locationInterests={userInterests}
            removeInterest={removeInterest}
            inputClass={inputClass}
            buttonClass={buttonClass}
            handleSearch={handleSearch}
            query={locationQuery}
            setShowList={setLocationShowList}
            showList={showLocationList}
            allInterests={locationInterests}
            addToProfile={addToProfile}
          />

        </div>
      </div>
    </div>
  );
};

export default Profile;
