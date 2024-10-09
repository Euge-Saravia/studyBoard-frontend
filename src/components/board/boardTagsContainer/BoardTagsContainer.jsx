import { useEffect, useState } from "react";
import "./boardTagsContainer.scss";
import Board from "../Board";
import CreateBoard from "../createBoard/CreateBoard";
import { useAuth } from "../../../hooks/useAuth";
import LoadingModal from "../../modals/loadingModal/LoadingModal";
import AlertModal from "../../modals/alertModal/AlertModal";
import { READ_BY_ID } from "../../../config";
import useFetch from "../../../hooks/useFetch";


const BoardTagsContainer = ({ id }) => {

    const { authToken } = useAuth();
    const endpoint = READ_BY_ID.replace("${id}", id)
    const [openCardIndex, setOpenCardIndex] = useState(null)
    const [isCreator, setIsCreator] = useState(false)

    const fetchOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
    }

    const { data, loading, error } = useFetch(endpoint, fetchOptions, !!authToken)

    useEffect(() => {
        if (data) {
            console.log("DATA: ", data)
            setIsCreator(data.isCreator)
        }
    }, [data])

    if (loading) return <div> <LoadingModal /> </div>
    if (error) return <div> <AlertModal title="Error:" errorText={error.message} /> </div>
    if (!data) {
        return <div> <AlertModal errorText="No hay datos disponibles" /> </div>;
    }

    console.log("Tableros disponibles:", data.boards);

    const toggleBoard = (index) => {
        setOpenCardIndex(openCardIndex === index ? null : index);
    };

    return (
        <section className="boards">
            <h1>{data.groupName}</h1>
            <section className="tags">
                {isCreator && (
                    <CreateBoard
                        key={0}
                        isOpen={openCardIndex === 0}
                        toggleBoard={() => toggleBoard(0)}
                    />
                )}
                {data.boards && data.boards.length > 0 ? (data.boards.map((board, index) => {
                    return (
                        <Board
                            key={index + 1}
                            boardId={board.id}
                            color={board.color}
                            name={board.title}
                            isOpen={openCardIndex === index + 1}
                            toggleBoard={() => toggleBoard(index + 1)}
                        />
                    )
                })
                ) : (
                    <p>No hay tableros disponibles</p>
                )}
            </section>
        </section>
    );
};

export default BoardTagsContainer;
