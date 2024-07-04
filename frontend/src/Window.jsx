import "98.css"
import styles from './app.module.css'
import { useEffect, useState } from "react"
const Window = () => {
    const [string, setString] = useState("")
    const [comments, setComments] = useState([])

    function handleChange(e){
        setString(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
    }

    // fetch comments
    async function fetchComments(){
        const c = await fetch("http://localhost:8080/api/comments")
        setComments(await c.json())
        
    }

    useEffect(() => {
        fetchComments();
    }, []);

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
        <div className={`window-body ${styles.windowBody}`}>{comments.map((comment)=>{
            return <p key={comment._id}>{comment.message}</p>
        })}
            
            <div className={`field-row-stacked ${styles.inputSection}`}>
                
                <textarea className={`${styles.inputBox}`} onChange={(e)=>{handleChange(e)}} value={string} id="text20" rows="5"></textarea>
                <div className={`${styles.buttonRow}`}>
            
                    <button onClick={(e)=>handleSubmit(e)}  className={`${styles.button}`}>post</button>
                    <button  className={`${styles.button}`}>clear</button>
                 
                </div>
            </div>
        </div>
      </div>
      
    )
}

export default Window