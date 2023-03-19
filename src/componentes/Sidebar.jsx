import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1676594038099-200616e46d6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80' 
            />

            <div className={styles.profile}>
                <Avatar src="https://this-person-does-not-exist.com/img/avatar-117e952b03d5763a3b8f8dec4bf5f2dd.jpg" />

                <strong>Liana</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}