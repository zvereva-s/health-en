import { NavLink } from 'react-router-dom';

import styles from "./mobile-menu.module.css"

import { items } from '../HeaderMenu/items';

function getClassName({ isActive }) {
    const style = isActive ? styles.isActive : styles.link;
    return style;
  }

function MobileMenu({onClick}) {

    const selectItems =items.filter(item => item.private);
  
    const elements = selectItems.map(({id, link, title}) => 
      <li key={id} className={styles.item}>
        <NavLink className={getClassName} onClick={onClick} to={link}>
          {title}
        </NavLink>
      </li>
    );

    return (
        <div className={styles.mobileContainer} >
            <ul className={styles.mobileMenu} > 
               {elements}
            </ul>
        </div>
    )
}

export default MobileMenu;