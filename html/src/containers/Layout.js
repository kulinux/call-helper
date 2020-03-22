import React from 'react'

import CurrentCall from '../components/CurrentCall'
import PhoneBook from '../components/PhoneBook'
import UserInput from '../components/UserInput'

function Layout(props) {
    return <div>
        <div><PhoneBook/></div>
        <div><CurrentCall/></div>
        <div><UserInput/></div>
    </div>
}

export default Layout;