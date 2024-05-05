import React from 'react'
import { basePayOptions, expOptions, locationOptions, remoteOptions, roleOptions, techStackOptions } from './OptionData'
import CustomSelect from './CustomSelect'

const Filters = () => {
  return (
    <div className='filters'>
       <CustomSelect
        width={185}
        placeholder={"Role"}
        options={roleOptions}
        multiValues={true}
      />
      <CustomSelect
        width={185}
        placeholder={"Location"}
        options={locationOptions}
        multiValues={true}
      />
      <CustomSelect
        width={185}
        placeholder={"Experience"}
        options={expOptions}
        multiValues={true}
     
      />
      <CustomSelect
        width={185}
        placeholder={"Remote"}
        options={remoteOptions}
        multiValues={true}
       
      />
      <CustomSelect
        width={185}
        placeholder={"Tech Stack"}
        options={techStackOptions}
        multiValues={true}
       
      />
      <CustomSelect
        width={185}
        placeholder={"Min Base Pay"}
        options={basePayOptions}
        multiValues={true}
      
      />
      <input
        type="text"
        style={{
          width: "200px",
          padding: "0 7px",
          fontSize: ".9rem",
          height: "37px",
          // outline: "none",
          outlineColor: "#007bff",
          // border: "none",
          border: "1px solid #80808080",
          borderRadius: "4px",
        }}
        placeholder="Company"
      
      />
    </div>
  )
}

export default Filters
