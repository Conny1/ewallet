import { useState } from "react";
import styled from "styled-components";
import DashboardNav from "../components/DashboardNav";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ProfileLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EditableField = styled.input`
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #0074cc;
  outline: none;
  width: 100%;
  text-align: center;
  margin-top: 5px;
`;

const UpdateButton = styled.button`
  padding: 8px 16px;
  background-color: #0074cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("********");
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateClick = () => {
    setName(newName);
    setEmail(newEmail);
    setPassword(newPassword);
    setIsEditing(false);
  };

  return (
    <>
      <DashboardNav />
      <hr />
      <ProfileContainer>
        <ProfileImage
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
        />
        <ProfileField>
          {isEditing ? (
            <>
              <ProfileLabel>Name</ProfileLabel>
              <EditableField
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </>
          ) : (
            <div>
              <ProfileLabel>Name</ProfileLabel>
              <div>{name}</div>
            </div>
          )}
        </ProfileField>
        <ProfileField>
          {isEditing ? (
            <>
              <ProfileLabel>Email</ProfileLabel>
              <EditableField
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </>
          ) : (
            <div>
              <ProfileLabel>Email</ProfileLabel>
              <div>{email}</div>
            </div>
          )}
        </ProfileField>
        <ProfileField>
          {isEditing ? (
            <>
              <ProfileLabel>Password</ProfileLabel>
              <EditableField
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </>
          ) : (
            <div>
              <ProfileLabel>Password</ProfileLabel>
              <div>{password}</div>
            </div>
          )}
        </ProfileField>
        {isEditing ? (
          <UpdateButton onClick={handleUpdateClick}>Update</UpdateButton>
        ) : (
          <UpdateButton onClick={() => setIsEditing(true)}>Edit</UpdateButton>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
