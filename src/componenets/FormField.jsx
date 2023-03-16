import { Stack } from '@mui/system'
import React from 'react'
const FormField = ({ LableName, placeholder, type, name, value, handleChange, isSurpriseMe, handleSurprise }) => {
  return (
    <>
      <Stack marginBottom={1} gap={2}>

        <Stack direction={'row'} gap={1}>
          <label className='headertext' htmlFor={name}>
            <p style={{ color: 'white' }}> {LableName}</p>
          </label>

          {isSurpriseMe && (
            <button className='but' style={{ fontSize: '12px' }} onClick={handleSurprise}>
              <h3 style={{ fontWeight: 'bold' }}>Surprise Me</h3>
            </button>
          )}
        </Stack>

        <div class="col-3">
          <input className="effect-2" id={name} placeholder={placeholder} type={type} name={name} value={value} onChange={handleChange} required autoComplete='off' />
          <span class="focus-border"></span>
        </div>


      </Stack>
    </>
  )
}

export default FormField