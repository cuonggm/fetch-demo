import { useEffect, useState } from "react";

const Fetch = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers((state) => {
          console.log(data);
          return data;
        });
      });
  }, []);

  return (
    <div>
      <h1>Fetch Component</h1>
      <div>
        <ul>
          {users.map((item) => {
            return (
              <li key={item.id}>
                <div>ID= {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Username: {item.username}</div>
                <div>Email: {item.email}</div>
                <div>Phone: {item.phone}</div>
                <div>Website: {item.website}</div>

                <div>
                  Company:
                  <ul>
                    <li>Name: {item.company.name}</li>
                    <li>catchPhrase = {item.company.catchPhrase}</li>
                    <li>bs: {item.company.bs}</li>
                  </ul>
                </div>

                <div>
                  Address:
                  <ul>
                    <li>City: {item.address.city}</li>
                    <li>Street: {item.address.street}</li>
                    <li>Suite: {item.address.suite}</li>
                    <li>Zipcode: {item.address.zipcode}</li>

                    <div>
                      <ul>
                        <li>lat: {item.address.geo.lat}</li>
                        <li>lng: {item.address.geo.lng}</li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Fetch;
