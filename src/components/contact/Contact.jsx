import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import css from './contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.card}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}