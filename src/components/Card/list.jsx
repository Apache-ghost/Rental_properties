
import JPic from "../../../public/images/hero-image.png";
export const props = [
  {
    id: 1,
    image: JPic,
    cost: 20.0,
    location: "Yaoundé, Messassi",
    category: "For Rent",
    description: "Appartment",
  },
  {
    id: 2,
    image: JPic,
    cost: 0,
    location: "Bonaberi, Douala",
    category: "For Sale",
    description: "Appartment",
  },
  {
    id: 3,
    image: JPic,
    cost: 0,
    location: "Yaoundé, Messassi",
    category: "For Rent",
    description: "Appartment",
  },
  {
    id: 4,
    image: JPic,
    cost: 20.0,
    location: "Bonaberi, Douala",
    category: "For Sale",
    description: "Appartment",
  },
  {
    id: 5,
    image: JPic,
    cost: 0,
    location: "Yaoundé, Messassi",
    category: "For Rent",
    description: "Appartment",
  },
  {
    id: 6,
    image: JPic,
    cost: 0,
    location: "Bonaberi, Douala",
    category: "For Sale",
    description: "Appartment",
  },
  {
    id: 7,
    image: JPic,
    cost: 20.0,
    location: "Yaoundé, Messassi",
    category: "For Rent",
    description: "Appartment",
  },
  {
    id: 8,
    image: JPic,
    cost: 0,
    location: "Bonaberi, Douala",
    category: "For Sale",
    description: "Appartment",
  },
  {
    id: 9,
    image: JPic,
    cost: 0,
    location: "Yaoundé, Messassi",
    category: "For Rent",
    description: "Appartment",
  },
  {
    id: 10,
    image: JPic,
    cost: 20.0,
    location: "Bonaberi, Douala",
    category: "For Sale",
    description: "Appartment",
  },
];


function App() {
  const [properties, setProperties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState({})

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const reponse = await fetch("http://127.0.0.1:5000/properties");
    const data = await reponse.json();
    setProperties(data.properties);
    console.log(data.properties);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProperty({})
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  const openEditModal = (property) => {
    if (isModalOpen) return
    setCurrentProperty(property)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchProperties()
  }

  return (
    <>
      <ContactList properties={properties} updateProperty = {openEditModal} updateCallback={onUpdate}/>
      <button onClick={openCreateModal}>Create New Property</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <ContactForm existingProperty={currentProperty} updateCallback={onUpdate}/>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
