import React, {Fragment, useContext} from 'react'
import ContactItem from './ContactItem';
import ContactContext from '../../context/contacts/ContactContext';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts} = contactContext;
  return (
    <Fragment>
        {contacts.map(contact => (
            <ContactItem contact={contact} key={contact.id} />
        ))}
    </Fragment>
  )
}

export default Contacts