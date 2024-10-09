import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import GroupCard from "../groupCard/GroupCard";
import useFetch from "../../../hooks/useFetch";
import "./componentGroupCards.scss";
import { READ_ALL_GROUP } from "../../../config";

const ComponentGroupCards = () => {
    const [groups, setGroups] = useState([]);
    const { authToken } = useAuth();
    const { data, loading, error, fetch: fetchData } = useFetch(READ_ALL_GROUP, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
    }, false);

    useEffect(() => {
        if (authToken) {
            fetchData(); 
        }
    }, [authToken]);


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
