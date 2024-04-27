import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/Provider";
import { toast } from "react-toastify";

const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onAddSpot = (data) => {
        console.log("submit")
        fetch("https://tourism-management-server-ecru.vercel.app/add-tourists-spot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => toast.success("Added successfully"))
        reset();
    }
    return (
        <div className="card shrink-0 w-full max-w-6xl mx-auto shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onAddSpot)}>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input placeholder="Country Name" className="input input-bordered" {...register("country_name", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <input className="input input-bordered" placeholder="Tourists Spot Name" {...register("tourists_spot_name", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input placeholder="Location" className="input input-bordered" {...register("location", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input className="input input-bordered" placeholder="Image URL" {...register("image_url", { required: true })} />
                        {errors.image_url && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input placeholder="Seasonality" className="input input-bordered" {...register("seasonality", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input placeholder="Travel Time" className="input input-bordered" {...register("travel_time", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input placeholder="Total Visitors Per Year" className="input input-bordered" {...register("total_visitors_per_year", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input placeholder="Average Cost" className="input input-bordered" {...register("average_cost", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input placeholder="Short Description" className="input input-bordered" {...register("short_description", { required: true })} />
                    {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered" disabled defaultValue={user?.email} {...register("user_email", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered" disabled defaultValue={user?.displayName} {...register("user_name", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <br />
                <input className="btn btn-primary" type="submit" value={"Add"} />
            </form>
        </div>
    );
};

export default AddTouristsSpot;