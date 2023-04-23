import CityButton from '@/components/elements/CityButton/CityButton'
import styles from '@/styles/header/index.module.scss'
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown'

const HeaderTop = () => {
  console.log()
  return (
    <div className={styles.header__top}>
      <div className={`container ${styles.header__top__container}`}>
        <CityButton />
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link href="shopping-payment" passHref legacyBehavior>
                <a className={styles.header__nav__list__item__link}>
                  Доставка и оплата
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/about" passHref legacyBehavior>
                <a className={styles.header__nav__list__item__link}>
                  О компании
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/catalog" passHref legacyBehavior>
                <a className={styles.header__nav__list__item__link}>Каталог</a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/contacts" passHref legacyBehavior>
                <a className={styles.header__nav__list__item__link}>Контакты</a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/wholesale-byers" passHref legacyBehavior>
                <a className={styles.header__nav__list__item__link}>
                  Оптовым покупателям
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <ProfileDropdown />
      </div>
    </div>
  )
}
export default HeaderTop
