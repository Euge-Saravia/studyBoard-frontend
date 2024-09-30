import React, { useState } from 'react'
import PostIt from '../PostIt'
import "./postItContainer.scss";
import PostItExpand from '../postItExpand/PostItExpand';
import { AnimatePresence, motion } from 'framer-motion';

const PostItContainer = () => {
    const [selectedId, setSelectedId] = useState(null)

    const postits = [
        {
            id: 1,
            type: "perano",
            title: "JWT",
            text: "Lorem ipsum",
        },
        {
            id: 2,
            type: "wheat",
            title: "Spring",
            text: "Lorem ipsum ipsum lorem"
        },
        {
            id: 3,
            type: "rose",
            title: "Security",
            text: "Lorem ipsum"
        },
        {
            id: 4,
            type: "green-brut",
            title: "Arrays",
            text: "Lorem ipsum ipsum lorem ipsum lorem"
        },
        {
            id: 5,
            type: "wheat",
            title: "Spring",
            text: "Lorem ipsum ipsum lorem"
        },
    ]

    const selectedPostIt = postits.find(postit => postit.id === selectedId);

  return (
    <div className="postit-sect">
        <div className="expanded-postit">
            <AnimatePresence>
                {selectedId && selectedPostIt && (
                    <PostItExpand 
                    layoutId={selectedId}
                    type={selectedPostIt.type} 
                    title={selectedPostIt.title}
                    text={selectedPostIt.text}
                    onClick={() => setSelectedId(null)}/>
                )}
            </AnimatePresence>            
        </div>
        <div className="postit-cont">
        {postits.map((postit, index) => (
           <PostIt 
            layoutId={postit.id}
            key={index}
            type={postit.type} 
            title={postit.title} 
            text={postit.text} 
            onClick={() => setSelectedId(postit.id)} /> 
        ))}
        </div>

    </div>
  )
}

export default PostItContainer
