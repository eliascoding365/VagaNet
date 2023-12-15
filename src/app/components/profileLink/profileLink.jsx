import React from 'react'
import styles from './profileLink.module.css'

const ProfileLink = () => {
  return (
<div className={styles.positionLink}>
    <div className={styles.containerWidth}>
        
            <a href='/user'><h1 className={styles.profile}>Elias</h1></a>
    </div>
</div>
  )
}

export default ProfileLink