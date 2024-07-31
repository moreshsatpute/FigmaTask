import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ActionButtons() {
  // State to manage the selected action and dropdown visibility
  const [selectedAction, setSelectedAction] = useState('Actions');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to handle selection of Approve or Reject
  const handleSelectAction = (action) => {
    setSelectedAction(action);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <tr>
      {/* Approve/Reject Column */}
      <td className='d-flex align-items-center'>
        <div className="btn-group">
          <button
            className={`btn dropdown-toggle ${selectedAction === 'Reject' ? 'btn-danger' : 'btn-primary'}`}
            type="button"
            onClick={toggleDropdown}
            style={{ width: '120px' }} // Set a fixed width for consistency
          >
            {selectedAction}
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSelectAction('Approve')}
              >
                Approve
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSelectAction('Reject')}
              >
                Reject
              </button>
            </li>
          </ul>
        </div>
      </td>

      {/* View Details Column */}
      <td className="pe-3">
        <a href="#" className="text-decoration-none">
          View Details
        </a>
      </td>

    
      <td>
        <a href="#" className="text-warning text-decoration-none me-3">
          <i className="bi bi-pencil-fill"></i> 
        </a>
        <a href="#" className="text-info text-decoration-none">
          <i className="bi bi-printer-fill"></i> {/* Print Icon */}
        </a>
      </td>
    </tr>
  );
}

export default ActionButtons;
