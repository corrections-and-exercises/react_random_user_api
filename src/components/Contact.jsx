const Contact = ({ data: { email, phone, location } }) => {
  return (
    <>
      <p>Address:{location.city} </p>
      <p>Email: {email} </p>
      <p>Phone number: {phone} </p>
    </>
  );
};

export default Contact;
