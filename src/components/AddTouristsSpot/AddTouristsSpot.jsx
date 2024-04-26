import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/Provider";

const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onAddSpot = (data) => {
        fetch("http://localhost:5000/add-tourists-spot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onAddSpot)}>
                <div>
                    <label>image_url</label>
                    <input {...register("image_url", { required: true })} />
                    {errors.image_url && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>tourists_spot_name</label>
                    <input {...register("tourists_spot_name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>country_Name</label>
                    <input {...register("country_Name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>location</label>
                    <input {...register("location", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>short_description</label>
                    <input {...register("short_description", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>average_cost</label>
                    <input {...register("average_cost", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>seasonality</label>
                    <input {...register("seasonality", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>travel_time</label>
                    <input {...register("travel_time", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>total_visitors_per_year</label>
                    <input {...register("total_visitors_per_year", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>user_email</label>
                    <input defaultValue={user?.email} {...register("user_email", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>user_name</label>
                    <input defaultValue={user?.displayName} {...register("user_name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <input type="submit" value={"Add"} />
            </form>
        </div>
    );
};

export default AddTouristsSpot;