import { Outlet } from 'react-router-dom'

import { Tabbar } from '@/components'

import styles from './styles.module.scss'

export const IsValid = () => {

  return (
    <main className={styles.main}>
      <Tabbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  )
}
