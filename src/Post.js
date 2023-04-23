import React, { useRef } from "react";
import { useEffect } from "react";

function Post(){
  const refAuthor = useRef(null);
  const refTitle = useRef(null);
  const refYear = useRef(null);
  const refGenre = useRef(null);
  const refImg = useRef(null);
  const refDesc = useRef(null);




    useEffect(()=>{
      fetch("/postBook", {
        method: "POST",
        headers: {
          'Content-Type' : "application/json"
        },
        body: JSON.stringify(refTitle.current.value, refAuthor, refYear, refGenre, refDesc, refImg)
      })
    }, [])
  return(
    <form>
        <label for="title">Title</label>
        <input ref={refTitle} type="text" name="title" id="title" placeholder="Title" required></input>
        <label for="description">description</label>
        <input ref={refDesc} type="text" name="description" id="description" placeholder="author" required></input>

        <label for="author">author</label>
        <input ref={refAuthor} type="text" name="author" id="author" placeholder="author" required></input>

        <label for="year">year</label>
        <input ref={refYear} type="text" name="year" id="year" placeholder="year" required></input>

        <label for="genre">genre</label>
        <input ref={refGenre} type="text" name="genre" id="genre" placeholder="genre" required></input>

        <label>Image:</label>
        <input ref={refImg} type="file" accept="image/*" id="image" name="image"></input>
        <button type="button" onClick={useEffect}>Post</button>
    </form>
  )
}

export default Post