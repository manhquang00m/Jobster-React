import React from 'react'
import Wrapper from '../../assets/wrappers/DashboardFormPage';

function Profile() {
    const handleSubmit = () => {

    }
    return (
        <Wrapper>
            <form className='form' onSubmit={handleSubmit}>
                <h3>profile</h3>

                <div className='form-center'>
                    <button className='btn btn-block' type='submit' >
                        A
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default Profile

// - PATCH /auth/updateUser