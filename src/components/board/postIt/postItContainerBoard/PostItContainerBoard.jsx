import React, { useState } from 'react'
import PostIt from '../PostIt'
import "./postItContainerBoard.scss";
import PostItExpand from '../postItExpand/PostItExpand';
import { AnimatePresence, motion } from 'framer-motion';

const PostItContainerBoard = () => {
    const [selectedId, setSelectedId] = useState(null)

    const postits = [
        {
            id: 8,
            type: "perano",
            title: "JWT",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ante interdum nec pharetra commodo pellentesque eget euismod. Vestibulum quam velit est; eu ex enim. Justo efficitur ullamcorper ante porttitor diam accumsan phasellus.\n ```javascript\nNatoque tincidunt diam porta purus curae.\n``` \nLacus mattis urna, purus suscipit iaculis blandit.Id facilisi sed pellentesque maximus class. Sit mi magnis sapien conubia elementum.",
        },
        {
            id: 9,
            type: "wheat",
            title: "Spring",
            text: "Here is some **bold text** and a code snippet:\n```javascript\nconst token = jwt.sign({ foo: 'bar' }, 'shhhhh');\n```",
        },
        {
            id: 10,
            type: "rose",
            title: "Security",
            text: "Lorem ipsum"
        },
        {
            id: 11,
            type: "green-brut",
            title: "Arrays",
            text: "Lorem ipsum ipsum lorem ipsum lorem"
        },
        {
            id: 12,
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

export default PostItContainerBoard
