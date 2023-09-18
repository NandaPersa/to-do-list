import React from 'react';

import styles from './styles.module.css';
import rocket from '../../assets/rocket.png'
import logo from '../../assets/todo.png'

const Header: React.FC = () => {
  return (
  <form className={styles.container}>
    <img src={rocket} alt='rocket' />
    <img src={logo} alt='logo' />
  </form>
  )
}

export default Header;