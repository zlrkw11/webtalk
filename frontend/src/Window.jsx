import "98.css"
import styles from './app.module.css'
const Window = () => {
    return (
    <div className={`window ${styles.windowTitle} `}>
        <div className={`title-bar`}>
        <div className={`title-bar-text`}>web talk</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className={`window-body ${styles.windowBody}`}>Enter your comments lol
            
            <div className={`field-row-stacked ${styles.inputSection}`}>
                
                <textarea className={`${styles.inputBox}`} id="text20" rows="5"></textarea>
                <div className={`${styles.buttonRow}`}>
            
                    <button className={`${styles.button}`}>post</button>
                    <button className={`${styles.button}`}>clear</button>
                 
                </div>
            </div>
        </div>
      </div>
      
    )
}

export default Window