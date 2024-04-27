import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { toast } from "react-toastify";

const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext)
    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
        const country_name = form.country_name.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const location = form.location.value;
        const image_url = form.image_url.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;
        const average_cost = form.average_cost.value;
        const short_description = form.short_description.value;
        const user_email = form.email.value;
        const user_name = form.name.value;
        const data = {
            country_name,
            tourists_spot_name,
            location,
            image_url,
            seasonality,
            travel_time,
            total_visitors_per_year,
            average_cost,
            short_description,
            user_email,
            user_name
        }
        fetch("https://tourism-management-server-ecru.vercel.app/add-tourists-spot", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Added successfully")
                }
            })
    }
    return (
        <div className="card shrink-0 w-full max-w-6xl mx-auto shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleAddSpot}>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input name="country_name" placeholder="Country Name" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Tourists Spot Name</span>
                        </label>
                        <input name="tourists_spot_name" placeholder="Tourists Spot Name" className="input input-bordered" required />

                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" placeholder="Location" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input name="image_url" placeholder="Image URL" className="input input-bordered" required />

                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input name="seasonality" placeholder="Seasonality" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input name="travel_time" placeholder="Travel Time" className="input input-bordered" required />

                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input name="total_visitors_per_year" placeholder="Total Visitors Per Year" className="input input-bordered" required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input name="average_cost" placeholder="Average Cost" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input name="short_description" placeholder="Short Description" className="input input-bordered" required />

                </div>
                <div className="md:flex gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" className="input input-bordered" disabled defaultValue={user?.email} required />

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" className="input input-bordered" disabled defaultValue={user?.displayName} required />

                    </div>
                </div>
                <br />
                <input className="btn btn-primary" type="submit" value={"Add"} />
            </form>
        </div>
    );
};

export default AddTouristsSpot;