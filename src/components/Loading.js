import React from "react";

const Loading = ({ isLoading }) => {
  return (
    <div>
      { isLoading ? <div>loading...</div> : null }
    </div>
  )
}

export default Loading;
