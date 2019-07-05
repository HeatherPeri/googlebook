import React from 'react';


function Search() {
  return (
    <div>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>1</td>
                <td>Book Title</td>
                <td>Jane Doe</td>
                <td>Hello from the other side</td>
                <td>
                    <button color="danger" size="sm">Delete</button>
                </td>
            </tr>
        </tbody>
    </Table>
    </div>
  );
}

export default Search;