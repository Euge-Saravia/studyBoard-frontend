import { useEffect, useState } from "react";
import GroupCard from "../groupCard/GroupCard";
import "./componentGroupCards.scss";
import useFetch from "../../../hooks/useFetch";

const ComponentGroupCards = () => {
    const [groups, setGroups] = useState([]);
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnRvw7FpdG9AZW1haWwuY29tIiwiaWF0IjoxNzI4MjIwMjQ5LCJleHAiOjE3MjgzMDY2NDl9.Tk-MKvY5pRKa_RKkX3hPlyYHFG4nfRUvX1AduAwNwG4";
    const { data, loading, error } = useFetch("/group/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    useEffect(() => {
        if (data) {
            setGroups(data);
        }
    }, [data]);

    return (
        <div className="cardgroups-container">
            {loading ? (
                <p>Cargando grupos...</p>
            ) : (
                groups.map((group, index) => (
                    <GroupCard
                        key={index}
                        groupId={group.id}
                        title={group.groupName}
                        categories={group.boards}
                    />
                ))
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ComponentGroupCards;
