import { Link, useLoaderData } from "react-router-dom";


const MyList = () => {
    const individualTouristsSpot = useLoaderData()
    // const { country_Name, tourists_spot_name, location } = individualTouristsSpot
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
                        individualTouristsSpot.map((touristsSpot,idx) => <tr key={touristsSpot._id}>
                            <th>{idx+1}</th>
                            <th>{touristsSpot.country_Name}</th>
                            <td>{touristsSpot.location}</td>
                            <td>{touristsSpot.tourists_spot_name}</td>
                            <td><Link to={`/update/${touristsSpot?._id}`} className="btn btn-warning">Update</Link></td>
                            <td><button className="btn btn-error">Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;