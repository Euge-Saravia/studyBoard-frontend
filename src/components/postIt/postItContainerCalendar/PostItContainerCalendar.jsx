import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { GET_POST_IT_BY_DATE } from "../../../config";
import PostIt from "../PostIt";
import PostItExpand from "../postItExpand/PostItExpand";
import useFetch from "../../../hooks/useFetch";
import "./postItContainerCalendar.scss";

const PostItContainerCalendar = ({ date, groupId }) => {
    const [postits, setPostits] = useState([]);
    const [loader, setLoader] = useState(false);
    const [selectId, setSelectId] = useState(null);
    const endpoint = `${GET_POST_IT_BY_DATE.replace(
        "${groupId}",
        groupId
    )}${date}`;
    const { authToken } = useAuth();
    const {
        data,
        error,
        fetch: fetchData,
    } = useFetch(
        endpoint,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
        },
        false
    );

    useEffect(() => {
        if (groupId && date) {
            setLoader(true);
            fetchData().then(() => {
                setTimeout(() => {
                    setLoader(false);
                }, 500);
            });
        }
    }, [date, groupId]);

    useEffect(() => {
        if (data) {
            setPostits(data);
        }
    }, [data]);

    const selectPostIt = postits.find((postit) => postit.id === selectId);
    return (
        <div className="postit-section">
            {loader && <p className="messages">Buscando Post-its...</p>}
            {!loader && error && <p className="messages">{error}</p>}
            <div className="expanded-post-it">
                {!loader && !error && (
                    <AnimatePresence>
                        {selectId && selectPostIt && (
                            <PostItExpand
                                layoutId={`calendar-${selectId}`}
                                type={selectPostIt.color}
                                title={selectPostIt.title}
                                text={selectPostIt.textContent}
                                onClick={() => setSelectId(null)}
                            />
                        )}
                    </AnimatePresence>
                )}
            </div>
            <div className="postit-container">
                {!loader && !error && (
                    <>
                        {postits.map((postit, index) => (
                            <PostIt
                                layoutId={`calendar-${postit.id}`}
                                key={index}
                                type={postit.color}
                                title={postit.title}
                                text={postit.textContent}
                                onClick={() => setSelectId(postit.id)}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default PostItContainerCalendar;
