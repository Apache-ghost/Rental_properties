import React, { useEffect, useState } from 'react'
import ContactList from '../components/ApiTest/ContactList';
import ContactForm from '../components/ApiTest/ContactForm';

const Agents = () => {

  const [properties, setProperties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({});

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/properties");
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      const data = await response.json();
      setProperties(data.properties);
      console.log(data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      alert("Error fetching properties. Please try again later.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProperty({});
  };

  const openCreateModal = () => {
    if (!isModalOpen) {
      setCurrentProperty({});
      setIsModalOpen(true);
    }
  };

  const openEditModal = (property) => {
    if (!isModalOpen) {
      setCurrentProperty(property);
      setIsModalOpen(true);
    }
  };

  const onUpdate = () => {
    closeModal();
    fetchProperties();
  };

  return (
    <section>
    <ContactList properties={properties} updateProperty={openEditModal} updateCallback={onUpdate} />
      <button onClick={openCreateModal} className="button">Create New Property</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ContactForm existingProperty={currentProperty} updateCallback={onUpdate} />
          </div>
        </div>
      )}
     </section>
  )
}

export default Agents