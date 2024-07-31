import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GRNList.css';
import { useNavigate } from 'react-router-dom';
import ActionButtons from '../components/ActionButton/ActionButton';
import CreateGRN from '../components/CreateGRN/CreateGRN';

const data = [
  { id: 'GRN001', supplier: 'Acme Co.', order: 'PO0021', date: '25/05/2024', location: 'WH1', audit: 'Created, 15th May 2024', status: 'Pending' },
  { id: 'GRN002', supplier: 'Biffco Enterprises Ltd.', order: 'PO0022', date: '4/06/2024', location: 'WH3', audit: 'Approved, 15th May 2024', status: 'Approved' },
  { id: 'GRN003', supplier: 'Biffco Enterprises Ltd.', order: 'PO0023', date: '24/07/2024', location: 'WH2', audit: 'Created, 15th May 2024', status: 'Pending' },
  { id: 'GRN004', supplier: 'Biffcccccco Enterprises Ltd.', order: 'PO0024', date: '24/11/2024', location: 'WH4', audit: 'Created, 15th May 2024', status: 'Pending' },
  { id: 'GRN005', supplier: 'iffco Enterprises Ltd.', order: 'PO0025', date: '24/05/2024', location: 'WH3', audit: 'Approved, 15th May 2024', status: 'Approved' },
  { id: 'GRN006', supplier: 'Biffco Enterprises Ltd.', order: 'PO0026', date: '24/05/2024', location: 'WH7', audit: 'Approved, 15th May 2024', status: 'Approved' },
  // Add more sample data here
];

function GRNList() {
  const [filters, setFilters] = useState({ supplier: '', location: '', status: '' });
  const [search, setSearch] = useState({ document: '', supplier: '', order: '' });
  const [page, setPage] = useState(1);
  const [showCreateGRN, setShowCreateGRN] = useState(false);
  const rowsPerPage = 10;

  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch(prev => ({ ...prev, [name]: value }));
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCreateGRN = () => {
    setShowCreateGRN(true);
  };

  const handleCreateGRNClick = () => {
    navigate('/create-grn');
  };

  const filteredData = data
    .filter(row => (
      (!filters.supplier || row.supplier.includes(filters.supplier)) &&
      (!filters.location || row.location.includes(filters.location)) &&
      (!filters.status || row.status.includes(filters.status)) &&
      (!search.document || row.id.includes(search.document)) &&
      (!search.supplier || row.supplier.includes(search.supplier)) &&
      (!search.order || row.order.includes(search.order))
    ))
    .slice((page - 1) * rowsPerPage, page * rowsPerPage);

  if (showCreateGRN) {
    return <CreateGRN />;
  }

  return (
    <div className='panal'>
      <div className="container mt-4">
        <div className='d-flex justify-content-between align-items-center mb-3'>
          <h3 className='mb-0'>GRN list</h3>
          <button onClick={handleCreateGRNClick} className="btn btn-primary bi bi-plus"> Create GRN</button>
        </div>

        <div className="bg-success p-3 border rounded-4">
          <div className="row mb-3">
            <div className="col-md-2">
              <label htmlFor="supplierFilter">Supplier</label>
              <select className="form-select" id="supplierFilter" name="supplier" value={filters.supplier} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Acme Co.">Acme Co.</option>
                <option value="Biffco Enterprises Ltd.">Biffco Enterprises Ltd.</option>
                {/* Add more suppliers */}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="locationFilter">Location</label>
              <select className="form-select" id="locationFilter" name="location" value={filters.location} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="WH1">WH1</option>
                <option value="WH2">WH2</option>
                {/* Add more locations */}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="statusFilter">Status</label>
              <select className="form-select" id="statusFilter" name="status" value={filters.status} onChange={handleFilterChange}>
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>


   
          <div className="table-container table-responsive">
            <table className="table text-center">
              <thead>
                <tr >
                  <th className="index-column custom-color">Document #
                    <div className="col-md-1">
                      <input
                        type="text"
                        className="form-control"
                        id="documentSearch"
                        placeholder='search'
                        name="document"
                        value={search.document}
                        onChange={handleSearchChange}
                      />
                    </div>

                  </th>
                  <th className="index-column">Supplier's Name
                    <div className="col-md-1">
                      <input
                        type="text"
                        className="form-control"
                        id="supplierSearch"
                        placeholder='search'
                        name="supplier"
                        value={search.supplier}
                        onChange={handleSearchChange}
                      />
                    </div>

                  </th>
                  <th className="index-column custom-color">Purchase Order #
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        id="orderSearch"
                        name="order"
                        placeholder='search'
                        value={search.order}
                        onChange={handleSearchChange}
                      />
                    </div>

                  </th>
                  <th>Date of the Receipt</th>
                  <th>Location</th>
                  <th>Audit Trail</th>
                  <th>Action Buttons</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(row => (
                  <tr key={row.id}>
                    <td className="index-column">{row.id}</td>
                    <td>{row.supplier}</td>
                    <td>{row.order}</td>
                    <td>{row.date}</td>
                    <td>{row.location}</td>
                    <td>{row.audit}</td>
                    <td><ActionButtons /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <nav>
          <ul className="pagination">
            <li className={`page-item ${page === 1 && 'disabled'}`}>
              <button className="page-link" onClick={() => setPage(page - 1)}>Previous</button>
            </li>
            {[...Array(Math.ceil(data.length / rowsPerPage)).keys()].map(num => (
              <li key={num + 1} className={`page-item ${page === num + 1 && 'active'}`}>
                <button className="page-link" onClick={() => setPage(num + 1)}>{num + 1}</button>
              </li>
            ))}
            <li className={`page-item ${page === Math.ceil(data.length / rowsPerPage) && 'disabled'}`}>
              <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default GRNList;
