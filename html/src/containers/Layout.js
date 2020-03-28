import React from 'react'

import CurrentCall from '../components/CurrentCall'
import PhoneBook from '../components/PhoneBook'
import UserInput from '../components/UserInput'

function Layout(props) {
    return <div className='main'>
        <aside className='first'>
            <PhoneBook/>
        </aside>
        <main className='second'>
            <UserInput/>
       </main>
        <aside className='third'>
            <CurrentCall/>
        </aside>
    </div>
}

export default Layout;