import react from 'react';

const login = props => {
  return (
    <form>
      <div className="min-h-screen flex flex-col justify-top sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
              <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
              <input type="submit" value="Login" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"/>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}




export default login;
