import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactSlice';
import { selectNameFilter } from '../../redux/filterSlice';
import Contact from '../contact/Contact';


export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}