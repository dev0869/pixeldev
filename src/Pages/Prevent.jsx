import React from 'react'
import { useAuthContext } from '../Context/Authcontext'

const Prevent = () => {
    const {GoogleAuth}=useAuthContext()
    return (
        <>
            <div className='prevent'>
                <div className="headertext ">
                <img src="https://static.fotor.com/app/features/static/media/ai_image_no_login.b048b092.png" alt="" width={'120.5rem'} />

                    <p>Unlock Your Results for Free</p>
                    <p>Sign in now to unlock your image results. New registrants can also get free credits!</p>
               <br />
               <button className='but' style={{padding:'14px 13px',fontSize:'1.8rem'}} onClick={GoogleAuth}>Sign in To Unlock</button>
                </div>
            </div>

            <div class="Common__DreamPlaceholder-sc-1dxkxby-4 ZEJTS"></div>

        </>
    )
}

export default Prevent