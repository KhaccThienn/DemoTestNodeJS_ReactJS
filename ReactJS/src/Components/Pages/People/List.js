import React, { useEffect, useState } from 'react'
import * as PeopleServices from "../../../Services/PeopleService";

function List() {

    const [apiData, setAPIData] = useState([]);

    useEffect(() => {
        const getAPIData = async () => {
            const data = await PeopleServices.getAll();
            setAPIData(data);
        };
        getAPIData();
    }, [])

    return (
        <div className='container-fluid p-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Avatar</th>
                        <th>Province</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{items['id']}</td>
                                    <td>{items['name']}</td>
                                    <td>{items['birthday']}</td>
                                    <td className='w-25'>
                                        <img src={"http://" + items['avatar']} alt="" className='card-img' />
                                    </td>
                                    <td>
                                        {items['ProvinceName']}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List