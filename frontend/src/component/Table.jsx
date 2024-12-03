import React from 'react'

const Table = ({users}) => {
  return (
    <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
        {users.map((user)=>(
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user._id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
        ))}
    </tbody>
  </table>
</div>


  )
}

export default Table