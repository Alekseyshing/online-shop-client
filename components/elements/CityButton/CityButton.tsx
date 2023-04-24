import LocationSvg from '../LocationSvg/LocationSvg'
import { $mode } from '@/context/mode'
import styles from '@/styles/cityButton/index.module.scss'
import { useStore } from 'effector-react'

const CityButton = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <button className={styles.city}>
      <span className={`${styles.city__span} ${darkModeClass}`}>
        <LocationSvg />
      </span>
      <span className={`${styles.city__text} ${darkModeClass}`}>Краснодар</span>
    </button>
  )
}

export default CityButton
