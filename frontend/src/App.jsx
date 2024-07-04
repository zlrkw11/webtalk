import "98.css"
import styles from './app.module.css'
function App() {
  

  return (
   
      <div className={`window ${styles.mainWindow} `}>
        <div className={`title-bar-text`}>web talk</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

    
  )
}

export default App
