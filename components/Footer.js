import styles from './Footer.module.css'

export default function Footer() {
    const currentDate = new Date();

  return (
    <>
      <footer className={styles.footer}>
        Charmander &copy; {currentDate.getFullYear()}
      </footer>
    </>
  )
}
