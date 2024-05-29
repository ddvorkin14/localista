import React from "react";

const LocationInterests = ({
  locationInterests,
  removeInterest,
  inputClass,
  buttonClass,
  handleSearch,
  query,
  setShowList,
  showList,
  allInterests,
  addToProfile
}) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Your location interests</h2>
      {locationInterests.length > 0 && <hr/>}

      <div className="mt-2" style={{display: 'flex', flexWrap: 'wrap'}}>
        {locationInterests.map((interest) => {
          return (
            interest.kind === 'location' && (
              <a key={interest.id} className="mx-2 mb-2 p-1 px-2" onClick={removeInterest} data-method="delete" data-name={interest.name} style={{
                border: '1px solid silver', 
                borderRadius: 25,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}>
                {interest.name} <span className="text-xs" style={{color: "red"}}>x</span>
              </a>
            )
          )
        })}
      </div>

      <hr/>

      <div className="mt-2" style={{display: 'flex', flexWrap: 'wrap'}}>
        {locationInterests.map((interest) => {
          return (
            interest.kind === 'Location' && (
              <a key={interest.id} className="mx-2 mb-2 p-1 px-2" onClick={removeInterest} data-method="delete" data-name={interest.name} style={{
                border: '1px solid silver', 
                borderRadius: 25,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}>
                {interest.name} <span className="text-xs" style={{color: "red"}}>x</span>
              </a>
            )
          )
        })}

        <div style={{ width: '100%' }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 mt-3">Location interests</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Search interests"
            onChange={handleSearch}
            value={query}
            onClick={() => setShowList(true)}
          />
          {showList && (
            <button
              className={buttonClass}
              onClick={() => setShowList(false)}
            >
              Close
            </button>
          
          )}
          <div className="mt-2">
            {(query.length > 0 || showList) && (
              <ul className="border border-gray-300 rounded-md divide-y divide-gray-300">
                {allInterests.map((interest, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100" style={{cursor: 'pointer'}} onClick={addToProfile}>
                    {interest.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
};

export default LocationInterests;