import { useEffect, useState } from "react";
import "./boardTagsContainer.scss";
import Board from "../Board";
import CreateBoard from "../createBoard/CreateBoard";
import { useAuth } from "../../../hooks/useAuth";
import LoadingModal from "../../modals/loadingModal/LoadingModal";
import AlertModal from "../../modals/alertModal/AlertModal";


const BoardTagsContainer = ({ id }) => {

    const { authToken } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openCardIndex, setOpenCardIndex] = useState(null);
    const [isCreator, setIsCreator] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null)

            if (!authToken) {
                throw new Error("Token de autenticación inválido o ausente");
            }

            const response = await fetch(`http://localhost:4001/group/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                }
            })

            if (!response.ok) {
                throw new Error(`Error al obtener los datos: ${response.statusText}`);
            }

            const result = await response.json()

            if (!result || !result.groupName || !result.boards) {
                throw new Error("Datos no válidos o estructura inesperada en la respuesta")
            }

            setData(result);

        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (authToken && id) {
            console.log("Ejecutando fetchData con id:", id);

            fetchData()
            setIsCreator(data.isCreator)

        }
    }, [authToken, id]);

    if (loading) return <div> <LoadingModal /> </div>
    if (error) return <div> <AlertModal title="Error:" errorText={error.message} /> </div>
    if (!data) {
        return <div> <AlertModal errorText="No hay datos disponibles" /> </div>;
    }

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
                {data.boards && data.boards.length > 0 ? (data.boards.map((board, index) => (
                    <Board
                        key={index + 1}
                        color={board.color}
                        name={board.name}
                        isOpen={openCardIndex === index + 1}
                        toggleBoard={() => toggleBoard(index + 1)}
                    />
                ))
                ) : (
                    <p>No hay tableros disponibles</p>
                )}
            </section>
        </section>
    );
};

export default BoardTagsContainer;
