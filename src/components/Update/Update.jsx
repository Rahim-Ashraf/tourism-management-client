import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
    const oldData = useLoaderData()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onUpdateSpot = (data) => {
        fetch(`https://tourism-management-server-ecru.vercel.app/update/${oldData?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Updated successfully")
                }
            })
    }
    return (
        <div>
            <form className="card-body" onSubmit={handleSubmit(onUpdateSpot)}>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input defaultValue={oldData?.country_name} className="input input-bordered" {...register("country_name", { required: true })} />
                        {errors.country_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <input defaultValue={oldData?.tourists_spot_name} className="input input-bordered"{...register("tourists_spot_name", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input defaultValue={oldData?.location} className="input input-bordered" {...register("location", { required: true })} />
                        {errors.location && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input defaultValue={oldData?.image_url} className="input input-bordered" {...register("image_url", { required: true })} />
                        {errors.image_url && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input defaultValue={oldData?.seasonality} className="input input-bordered" {...register("seasonality", { required: true })} />
                        {errors.seasonality && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input defaultValue={oldData?.travel_time} className="input input-bordered" {...register("travel_time", { required: true })} />
                        {errors.travel_time && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input defaultValue={oldData?.total_visitors_per_year} className="input input-bordered" {...register("total_visitors_per_year", { required: true })} />
                        {errors.total_visitors_per_year && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input defaultValue={oldData?.average_cost} className="input input-bordered" {...register("average_cost", { required: true })} />
                        {errors.average_cost && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input defaultValue={oldData?.short_description} className="input input-bordered" {...register("short_description", { required: true })} />
                    {errors.short_description && <span className="text-red-600">This field is required</span>}
                </div>
                <br />
                <input className="btn btn-primary" type="submit" value={"Update"} />
            </form>
        </div>
    );
};

export default Update;