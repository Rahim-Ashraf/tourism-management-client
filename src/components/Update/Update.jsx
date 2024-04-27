import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
    const oldData = useLoaderData()
    console.log(oldData)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onUpdateSpot = (data) => {
        fetch(`http://localhost:5000/update/${oldData?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => toast.success("Updated successfully"))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onUpdateSpot)}>
                <div>
                    <label>image_url</label>
                    <input defaultValue={oldData?.image_url}{...register("image_url", { required: true })} />
                    {errors.image_url && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>tourists_spot_name</label>
                    <input defaultValue={oldData?.tourists_spot_name} {...register("tourists_spot_name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>country_Name</label>
                    <input defaultValue={oldData?.country_Name} {...register("country_Name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>location</label>
                    <input defaultValue={oldData?.location} {...register("location", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>short_description</label>
                    <input defaultValue={oldData?.short_description} {...register("short_description", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>average_cost</label>
                    <input defaultValue={oldData?.average_cost} {...register("average_cost", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>seasonality</label>
                    <input defaultValue={oldData?.seasonality} {...register("seasonality", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>travel_time</label>
                    <input defaultValue={oldData?.travel_time} {...register("travel_time", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <label>total_visitors_per_year</label>
                    <input defaultValue={oldData?.total_visitors_per_year} {...register("total_visitors_per_year", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <input type="submit" value={"Update"} />
            </form>
        </div>
    );
};

export default Update;