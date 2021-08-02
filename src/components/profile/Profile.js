import React from "react";
import CreateOrJoinHome from "./CreateOrJoinHome";
import UserInfo from "./UserInfo";
import { connect } from 'react-redux'

const Profile = props => {
  return (
    // <!-- component -->
<div className="font-mono">

		{/* <!-- Container --> */}
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				{/* <!-- Row --> */}
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					{/* <!-- Col --> */}
					{/* <div
						className="w-full h-auto hidden lg:block lg:w-1/2 bg-contain bg-no-repeat rounded-l-lg"
            style={{backgroundImage: "url(" + "../../img/house-157112_1280.png)"}}
					>
          </div> */}
					{/* <!-- Col --> */}
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						{/* TODO: update below check */}
					{props.currentUser.home.nickname ? <UserInfo /> : <CreateOrJoinHome /> }

					</div>
				</div>
			</div>
		</div>

	</div>


  )

}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Profile);
