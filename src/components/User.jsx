import Contact from "./Contact";

const User = ({ user: { name, dob, picture, ...rest } }) => {
  return (
    <div className="userProfile">
      <img src={picture.large} alt="name" />
      <div>
        <p>
          Name: {name.first} {name.last}
        </p>
        <p>Age: {dob.age} </p>
        <Contact data={rest} />
      </div>
    </div>
  );
};

export default User;
