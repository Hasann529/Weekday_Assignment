import React from 'react'

function CapL(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const genNumber = () => {
    const min = 1;
    const max = 15;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random
  };
  

const JobCard = () => {
  return (
    <div className="card">
    <p
      style={{
        fontSize: ".62rem",
        border: "1px solid #80808060",
        width: "fit-content",
        padding: "4px 8px",
        borderRadius: "20px",
      }}
    >
      ⏳ Posted {genNumber()} days ago
    </p>
    <div style={{ display: "flex", gap: ".5rem" }}>
      <img
        style={{ width: "25px", height: "2.5rem" }}
        src={"https://logo.clearbit.com/dropbox.com"}
        alt="logo"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#8b8b8b",
            letterSpacing: "1px",
          }}
        >
          {"Dropbox"}
        </p>
        <p style={{ fontSize: "14px", fontWeight: 300 }}>{CapL("FrontEnd")}</p>
        <p style={{ fontSize: "11px", fontWeight: 400 }}>{CapL("Delhi")}</p>
      </div>
    </div>
    <p style={{ fontSize: "14px" }}>Estimated Salary: ₹{44} - {52} LPA ✅</p>
    <div style={{ display: "flex", flexDirection: "column", gap: ".2rem" }}>
      <p style={{ fontSize: "1rem", fontWeight: 400 }}>About Company:</p>
      <p style={{ fontSize: "14px", fontWeight: 600 }}>About Us</p>
      <p style={{ fontSize: "14px", fontWeight: 300 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </p>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: ".275rem" }}>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#8b8b8b",
          letterSpacing: "1px",
        }}
      >
        Minimum Experience
      </p>
      <p style={{ fontSize: "14px", fontWeight: 300 }}>4 years</p>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <button
        style={{
          fontSize: "14px",
          fontWeight: 500,
          backgroundColor: "#55EFC4",
          border: "none",
          outline: "none",
          borderRadius: "8px",
          padding: "12px 18px",
        }}
      >
        ⚡ Easy Apply
      </button>
      <button
        style={{
          fontSize: "14px",
          fontWeight: 500,
          backgroundColor: "#915eff",
          border: "none",
          outline: "none",
          borderRadius: "8px",
          padding: "12px 18px",
        }}
      >
        Unlock referral asks
      </button>
    </div>
  </div>
  )
}

export default JobCard
