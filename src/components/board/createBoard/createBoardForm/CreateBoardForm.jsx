import MainButton from "../../../buttons/mainButton/MainButton";
import Input from "../../../inputs/Input";
import { useForm } from "react-hook-form";
import "./createBoardForm.scss"

const CreateBoardForm = ( { submitFunction }) => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        submitFunction(data, randomColor());
    }

    const randomColor = () => {
        const colors = ['rose', 'wheat', 'perano', 'green'];
        let randomNum = Math.floor(Math.random() * colors.length);
        return colors[randomNum];
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="board-form">
            <div className="form-content">
                <Input
                    id="name"
                    border="border"
                    type="text"
                    {...register("name", {
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
