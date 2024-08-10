import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  function addRandomContact() {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    const randomContactIndex = Math.floor(
      Math.random() * remainingContacts.length
    );
    setContacts([...contacts, remainingContacts[randomContactIndex]]);
  }

  function sortContactsByName() {
    const sortedContactsByName = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContactsByName);
  }

  function sortContactsByPopularity() {
    const sortedContactsByPopularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContactsByPopularity);
  }

  function deleteContact(idToDelete) {
    const listWithoutCeleb = contacts.filter(
      (contact) => contact.id !== idToDelete
    );
    setContacts(listWithoutCeleb);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortContactsByName}>Sort by Name</button>
      <button onClick={sortContactsByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>
              <h3>Picture</h3>
            </th>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Popularity</h3>
            </th>
            <th>
              <h3>Won an Oscar</h3>
            </th>
            <th>
              <h3>Won an Emmy</h3>
            </th>
            <th>
              <h3>Actions</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <th>
                <img src={contact.pictureUrl} alt="Contact Picture"></img>
              </th>
              <th>
                <p>{contact.name}</p>
              </th>
              <th>
                <p>{contact.popularity}</p>
              </th>
              <th>
                <p>{contact.wonOscar && "🏆"}</p>
              </th>
              <th>
                <p>{contact.wonEmmy && "🌟"}</p>
              </th>
              <th>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
