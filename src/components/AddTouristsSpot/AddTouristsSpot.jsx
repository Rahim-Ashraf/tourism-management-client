import { useForm } from "react-hook-form"

const AddTouristsSpot = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onAddSpot = (data) => {
        // const image_url = data.image_url;
        // const tourists_spot_name = data.tourists_spot_name;
        // const country_Name = data.country_Name;
        // const location = data.location;
        // const short_description = data.short_description;
        // const average_cost = data.average_cost;
        // const seasonality = data.seasonality;
        // const travel_time = data.travel_time;
        // const total_visitors_per_year = data.total_visitors_per_year;
        // const user_email = data.user_email;
        // const user_name = data.user_name;
        // const spotData = {
        //     image_url,
        //     tourists_spot_name,
        //     country_Name,
        //     location,
        //     short_description,
        //     average_cost,
        //     seasonality,
        //     travel_time,
        //     total_visitors_per_year,
        //     user_email,
        //     user_name,
        // }
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
                    <input {...register("image_url", { required: true })} />
                    {errors.image_url && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("tourists_spot_name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("country_Name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("location", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("short_description", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("average_cost", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("seasonality", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("travel_time", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("total_visitors_per_year", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("user_email", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <br />
                <div>
                    <input {...register("user_name", { required: true })} />
                    {errors.tourists_spot_name && <span>This field is required</span>}
                </div>
                <input type="submit" value={"Add"} />
            </form>
        </div>
    );
};

export default AddTouristsSpot;