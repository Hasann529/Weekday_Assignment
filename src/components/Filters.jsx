import React, { useEffect } from 'react'
import { basePayOptions, expOptions, locationOptions, remoteOptions, roleOptions, techStackOptions } from './OptionData'
import CustomSelect from './CustomSelect'

const Filters = ({ filterState , applyFiltersToJobs  }) => {

  const {
    roleState,
    setRoleState,
    locationState,
    setLocationState,
    experienceState,
    setExperienceState,
    remoteState,
    setRemoteState,
    techStackState,
    setTechStackState,
    minBasePayState,
    setMinBasePayState,
    nameState,
    setNameState,
  } = filterState;

  const filters = {
    role: roleState,
    location: locationState,
    experience: experienceState,
    remote: remoteState,
    techStack: techStackState,
    minBasePay: minBasePayState,
    name: nameState
  };

  useEffect(() =>{
    applyFiltersToJobs(filters)
  },[roleState , locationState , experienceState , remoteState , techStackState , minBasePayState , nameState])


  return (
    <div className='filters'>
       <CustomSelect
        width={185}
        placeholder={"Role"}
        options={roleOptions}
        selected={"Role"}
        select ={roleState}
        setSelected={setRoleState}
        multiValues={true}
      />
      <CustomSelect
        width={185}
        placeholder={"Location"}
        options={locationOptions}
        selected={"Location"}
        select ={locationState}
        setSelected={setLocationState}
        multiValues={true}
      />
      <CustomSelect
        width={185}
        placeholder={"Experience"}
        options={expOptions}
        selected={"Experience"}
        select ={experienceState}
        setSelected={setExperienceState}
        multiValues={false}
     
      />
      <CustomSelect
        width={185}
        placeholder={"Remote"}
        options={remoteOptions}
        selected={"Remote"}
        select ={remoteState}
        setSelected={setRemoteState}
        multiValues={true}
       
      />
      <CustomSelect
        width={185}
        placeholder={"Tech Stack"}
        options={techStackOptions}
        selected={"Tech Stack"}
        select ={techStackState}
        setSelected={setTechStackState}
        multiValues={true}
       
      />
      <CustomSelect
        width={185}
        placeholder={"Min Base Pay"}
        options={basePayOptions}
        selected={"Min Base Pay"}
        select ={minBasePayState}
        setSelected={setMinBasePayState}
        multiValues={false}
      
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
        value={nameState}
        onChange={(e) => {
          setNameState(e.target.value)
          localStorage.setItem('Name' , e.target.value)
        }}
      
      />
    </div>
  )
}

export default Filters
