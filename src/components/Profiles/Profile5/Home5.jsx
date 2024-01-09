import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home5() {
  const [foods, setFood] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

 

  useEffect(() => {
    axios
      .get('https://mernback1-n2ty.onrender.com/profile5')
      .then((result) => setFood(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
    .delete(`https://mernback1-n2ty.onrender.com/profile5/delete/${id}`)
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => console.log(err));
};



  const [addedItemIds, setAddedItemIds] = useState([]);

  const handleCheckboxChange = (foodId) => {
    const isSelected = selectedFoods.includes(foodId);
    const newSelectedFoods = isSelected
      ? selectedFoods.filter((id) => id !== foodId)
      : [...selectedFoods, foodId];
    setSelectedFoods(newSelectedFoods);
  
    // Logic for adding/deleting based on checkbox status
    const selectedFoodDetails = foods.find((food) => food._id === foodId);
  
    if (!isSelected) {
      // If the item is checked, send it to the backend to add
      axios.post('https://mernback1-n2ty.onrender.com/profile5/saveSelectedFood', selectedFoodDetails)
        .then((res) => {
          const newObjectId = res.data._id; // Assuming the ID is returned in the response
          setAddedItemIds([...addedItemIds, { foodId, newObjectId }]); // Store the new ID along with foodId
          console.log('Selected item details saved:', res.data);
        })
        .catch((err) => {
          console.log('Error saving selected item details:', err);
        });
    } else {
      // If the item is unchecked, find the stored ID and send it to the backend to delete
      const storedObjectId = addedItemIds.find(item => item.foodId === foodId)?.newObjectId;
  
      if (storedObjectId) {
        axios.delete(`https://mernback1-n2ty.onrender.com/profile5/deleteSelectedFood/${storedObjectId}`)
          .then((res) => {
            console.log('Selected item deleted:', res.data);
            setAddedItemIds(addedItemIds.filter(item => item.foodId !== foodId)); // Remove the ID from the list
          })
          .catch((err) => {
            console.log('Error deleting selected item:', err);
          });
      }
    }
  };

  const handleClearTable = () => {
    axios.delete('https://mernback1-n2ty.onrender.com/profile5/clearTable')
      .then((res) => {
        console.log('Table cleared:', res.data);
        
      })
      .catch((err) => {
        console.log('Error clearing table:', err);
      });
  };

  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};


  return (
    <div>
      <div className="navbar bg-base-100">
  <a className="btn btn-ghost text-xl">daisyUI</a>
  <button className="btn btn-active btn-accent" onClick={handleLogout}>LOGOUT</button>
</div>


    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
  <div className="w-75 bg-white rounded p-3">
    <div className="d-flex justify-content-between mb-3">
      <Link to="/profile5/create" className="btn btn-success">
        Add+
      </Link>
      <button onClick={handleClearTable} className="btn btn-danger">
        Clear Table
      </button>
    </div>
        
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleCheckboxChange(food._id)}
                  />
                </td>
                <td>
                  {food.imgUrl && (
                    <img
                      src={food.imgUrl}
                      alt={food.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </td>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.price}</td>
                <td>
                  <Link to={`/profile5/update/${food._id}`} className="btn btn-success">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(food._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-25 bg-white rounded p-3">
        {selectedFoods.length > 0 && (
          <div>
            <h3>Selected Items:</h3>
            <ul>
              {selectedFoods.map((id) => (
                <li key={id}>
                  {foods.find((food) => food._id === id)?.name || 'Unknown'}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>


      </div>
    </div>
    </div>
  );
}

export default Home5