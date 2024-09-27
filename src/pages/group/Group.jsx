import BoardTagsContainer from "../../components/board/boardTagsContainer/BoardTagsContainer"
import "./group.scss"

const Group = () => {
    //comprobar si user actual es creador
    const isCreator = true;

  return (
    <>
    <section className="boards">
        <h1>{name}Estudio de Java y Spring Boot</h1>
      <BoardTagsContainer isCreator={isCreator}/>
    </section>
    <section className="calendar">
      
    </section>
    </>
  )
}

export default Group
