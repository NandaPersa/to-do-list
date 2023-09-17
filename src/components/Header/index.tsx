import React from 'react';

import styles from './styles.module.css';
import rocket from '../../assets/rocket.png'
import logo from '../../assets/todo.png'

const Header: React.FC = () => {
  return (
  <div className={styles.container}>
    <img src={rocket} alt='rocket' />
    <img src={logo} alt='logo' />
  </div>
  )
}

export default Header;