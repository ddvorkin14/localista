import React from "react"

const Details = ({ inputs, handleChange, handleSubmit, inputClass, buttonClass, labelClass }) => {
  return (
    <div className="col-span-12 sm:col-span-3 p-4">
      <h2 className="text-lg font-semibold mb-4">Details</h2>
      <hr/>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => {
          return (
            <div key={index} className="mb-1">
              <label htmlFor={input.name} className={labelClass}>{input.label}</label>
              <input name={input.name} id={input.name} styles={{ width: '100%' }} className={inputClass} value={input.value} onChange={handleChange} />
            </div>
          )
        })}
        <button type="button" className={buttonClass} onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default Details;