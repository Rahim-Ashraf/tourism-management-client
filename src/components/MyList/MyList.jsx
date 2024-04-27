import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const loadedData = useLoaderData();
    const [individualTouristsSpot, setIndividualTouristsSpot] = useState(loadedData);
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-server-ecru.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setIndividualTouristsSpot(individualTouristsSpot.filter(touristsSpot => touristsSpot._id !== id))
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Country Name</th>
                        <th>Location</th>
                        <th>Spot Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        individualTouristsSpot?.map((touristsSpot, idx) => <tr key={touristsSpot._id}>
                            <th>{idx + 1}</th>
                            <th>{touristsSpot.country_Name}</th>
                            <td>{touristsSpot.location}</td>
                            <td>{touristsSpot.tourists_spot_name}</td>
                            <td><Link to={`/update/${touristsSpot._id}`} className="btn btn-warning">Update</Link></td>
                            <td><button onClick={() => handleDelete(touristsSpot._id)} className="btn btn-error">Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;