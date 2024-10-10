import MainButton from "../../../buttons/mainButton/MainButton";
import Input from "../../../inputs/Input";
import { useForm } from "react-hook-form";
import "./createBoardForm.scss"
import usePost from "../../../../hooks/usePost";
import { CREATE_BOARD } from "../../../../config";

const CreateBoardForm = ( { submitFunction, id }) => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const endpoint = CREATE_BOARD.replace("${groupId}", id)
    const {executePost} = usePost(endpoint)

    const randomColor = () => {
        const colors = ['rose', 'wheat', 'perano', 'green'];
        let randomNum = Math.floor(Math.random() * colors.length);
        return colors[randomNum];
    }

    const onSubmit = async (formData) => {
        const newBoardData = {
            title:formData.title,
            color:randomColor()
        }
        await executePost(newBoardData)

        if (submitFunction) {
            submitFunction()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="board-form">
            <div className="form-content">
                <Input
                    id="title"
                    border="border"
                    type="text"
                    {...register("title", {
                        required: "Debes introducir el nombre del board",
                    })}
                    placeholder="Nombre del nuevo board"
                />
                {errors.name && (
                    <p className="errors">{errors.name.message}</p>
                )}
            </div>
            <div className="buttons">
                <MainButton color="primary" text="Crear nuevo board" type="submit"/>
            </div>
        </form>
    );
};

export default CreateBoardForm;
