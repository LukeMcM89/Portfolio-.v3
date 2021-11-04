import * as React from 'react'
import styles from '../styles/Layout'

const Layout = props => {
    return (
        < div className = {styles.layout}>{props.children}</div>
    )
}

export default Layout