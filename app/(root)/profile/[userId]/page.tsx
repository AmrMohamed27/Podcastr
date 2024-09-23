import React from "react";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
  return <div>ProfilePage of userId {params.userId}</div>;
};

export default ProfilePage;
