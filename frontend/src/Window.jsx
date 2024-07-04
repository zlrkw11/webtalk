import "98.css"
import styles from './app.module.css'
const Window = () => {
    return (
    <div className={`window ${styles.windowTitle} `}>
        <div className={`title-bar-text`}>web talk</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
          <div className={`window-body ${styles.windowBody}`}>ray</div>
      </div>
      
    )
}

export default Window