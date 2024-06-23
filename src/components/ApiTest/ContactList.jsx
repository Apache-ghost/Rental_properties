/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ContactList = ({properties, updateProperty, updateCallback}) => {
    const onDelete = async (property_id) => {
        try{
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_property/${property_id}`, options)
            if (response.status === 200){
                updateCallback()
            } else {
                console.error("Failed to delete")
            }s
        } catch (error){
            alert(error)
        }
    }

    return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Properties</h2>
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Cost</th>
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 py-2 text-left">Location</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                {properties.map((property) => (
                    <tr key={property.property_id} className="border-b">
                        <td className="px-4 py-2">{property.category}</td>
                        <td className="px-4 py-2">{property.cost}</td>
                        <td className="px-4 py-2">
                            {property.image && <img src={`http://127.0.0.1:5000/${property.image}`} alt="Property" className="w-20 h-20 object-cover" />}
                        </td>
                        <td className="px-4 py-2">{property.location}</td>
                        <td className="px-4 py-2">{property.description}</td>
                        <td className="px-4 py-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => updateProperty(property)}>Update</button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onDelete(property.propertyId)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default ContactList;
