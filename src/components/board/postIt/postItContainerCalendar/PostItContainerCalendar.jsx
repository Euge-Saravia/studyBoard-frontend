import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import PostIt from '../PostIt';
import PostItExpand from '../postItExpand/PostItExpand';
import './postItContainerCalendar.scss';

const PostItContainerCalendar = () => {
    const [selectId, setSelectId] = useState(null)

    const postits = [
        {
            id: 1,
            type: "perano",
            title: "JWT",
            text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ante interdum nec pharetra commodo pellentesque eget euismod. Vestibulum quam velit est; eu ex enim. Justo efficitur ullamcorper ante porttitor diam accumsan phasellus.\n ```javascript\nNatoque tincidunt diam porta purus curae.\n``` \nLacus mattis urna, purus suscipit iaculis blandit.Id facilisi sed pellentesque maximus class. Sit mi magnis sapien conubia elementum.",
        },
        {
            id: 2,
            type: "wheat",
            title: "Spring",
            text: "Here is some **bold text** and a code snippet:\n```javascript\nconst token = jwt.sign({ foo: 'bar' }, 'shhhhh');\n```",
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

    const selectPostIt = postits.find(postit => postit.id === selectId);

  return (
    <div className="postit-section">
        <div className="expanded-post-it">
            <AnimatePresence>
                {selectId && selectPostIt && (
                    <PostItExpand 
                    layoutId={selectId}
                    type={selectPostIt.type} 
                    title={selectPostIt.title}
                    text={selectPostIt.text}
                    onClick={() => setSelectId(null)}/>
                )}
            </AnimatePresence>            
        </div>
        <div className="postit-container">
        {postits.map((postit, index) => (
           <PostIt 
            layoutId={postit.id}
            key={index}
            type={postit.type} 
            title={postit.title} 
            text={postit.text} 
            onClick={() => setSelectId(postit.id)} /> 
        ))}
        </div>

    </div>
  )

}

export default PostItContainerCalendar
