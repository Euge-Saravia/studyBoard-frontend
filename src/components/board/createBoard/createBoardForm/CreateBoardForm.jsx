import MainButton from "../../../buttons/mainButton/MainButton";
import Input from "../../../inputs/Input";
import { useForm } from "react-hook-form";
import "./createBoardForm.scss"

const CreateBoardForm = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data.name);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="board-form">
            <div className="form-content">
                <Input
                    id="name"
                    border="border"
                    type="text"
                    placeholder="Nombre del nuevo Board"
                    error="El nombre del board no puede estar en blanco"
                />
                {errors.email && (
                    <p className="errors">{errors.name.message}</p>
                )}
            </div>
            <div className="buttons">
                <MainButton color="accent" text="Iniciar sesión" />
            </div>
        </form>
    );
};

export default CreateBoardForm;
