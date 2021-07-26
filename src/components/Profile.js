import React from 'react'
import CreateHomeForm from "./CreateHomeForm";
import { connect } from 'react-redux'

const Profile = props => {
  // console.log('profile props', props)
  return (
    // <!-- component -->
<div className="font-mono bg-green-100">
		{/* <!-- Container --> */}
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				{/* <!-- Row --> */}
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					{/* <!-- Col --> */}
					<div
						className="w-full h-auto bg-green-100 hidden lg:block lg:w-1/2 bg-contain bg-no-repeat rounded-l-lg"
            style={{backgroundImage: "url(" + "../../img/house-157112_1280.png)"}}
					>
            {/* <img src="https://source.unsplash.com/oWTW-jNGl9I/600x800" /> */}
          </div>
					{/* <!-- Col --> */}
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="px-8 mb-4 text-center">
							<h3 className="pt-4 mb-2 text-2xl">Create or Join a Home:</h3>
							<p className="mb-4 text-sm text-gray-700">
								Find your home in the dropdown or add your information. We'll help you track plant care needs for your house!
							</p>
						</div>
						<CreateHomeForm />
					</div>
				</div>
			</div>
		</div>
	</div>


  )

}


export default Profile;
