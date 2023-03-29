import styles from "./../NavBar/styles/NavBar.module.css";

export default function TitlePage(props){
  return (
    <h2 className={styles.title__page}>{props.title}</h2>
  )
}