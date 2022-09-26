import React from 'react';
import './UserAccount.scss';

const UserAccount = () => {
  return (
    <div className='user__account'>
      <div className='user__container'>
        <div className='heading flex'>Your Account</div>
        <div className='sign__out flex'>Sign Out</div>

        <div className='account__details grid'>
          <div className='address__details flex'>
            <span style={{marginBottom: '1em', fontWeight: '600'}}>Address Details</span>
            <div className='flex' style={{fontSize: '1.2rem', flexDirection: 'column', gap: '.5rem', alignItems: 'center'}}>
              <span>User Name</span>
              <span>User Email</span>
              <span>User Address</span>
              <button type='button' className='address__btn'>View Address</button>
            </div>
          </div>
          <div className='order__status flex'>
            <span style={{marginBottom: '1em', fontWeight: '600'}}>Order Status</span>
            <div className='flex' style={{fontSize: '1.2rem', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
              <span>No orders to Show.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAccount;