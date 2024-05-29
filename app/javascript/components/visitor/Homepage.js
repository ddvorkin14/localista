import React from "react"
import PropTypes from "prop-types"

const Homepage = (props) => {
  const { current_user_interests } = props;
  const [query, setQuery] = React.useState('');

  const findActivites = (event) => {
    
  }

  return (
    <>
      <div className="flex justify-center items-center bg-cover" style={{backgroundImage: `url(${require('./homepage.jpg')})`, height: '700px'}}>
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Find your next adventure</h1>
          <form className="flex items-center justify-center">
            <input type="text" placeholder="Search..." className="px-4 py-2 mr-2 rounded-lg shadow-md outline-none" style={{width: '300px'}} value={query} onChange={(e) => setQuery(e.value)}/>
            <button type="submit" onClick={findActivites} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">Search</button>
          </form>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-80 p-8 mt-8">
        <h2 className="text-xl font-bold text-center mb-4">How It Works</h2>
        <div className="flex justify-center">
          <div className="w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Step 1: Choose Your Location</h3>
            <p>Select your destination city or enter your current location to find activities nearby.</p>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Step 2: Select Your Interests</h3>
            <p>Choose from a variety of categories such as outdoor adventures, cultural experiences, or food and drink.</p>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="text-lg font-bold mb-2">Step 3: Explore and Book</h3>
            <p>Browse through the available activities, read reviews, and book your preferred experience.</p>
          </div>
        </div>
      </div>


    </>
  )
}

Homepage.propTypes = {
  greeting: PropTypes.string
};

export default Homepage
