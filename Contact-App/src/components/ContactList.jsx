import ContactItem from "./ContactItem"
import styles from "./ContactList.module.css"
const ContactList = ({contacts,  removeHandler}) => {

   if (!contacts) {
    return <div className={styles.empty}>در حال دریافت اطلاعات...</div>;
  }

  if (!Array.isArray(contacts)) {
    console.error('contacts is not an array:', contacts);
    return <div className={styles.error}>داده‌ها نامعتبر هستند</div>;
  }

    return (
    <>
    <h2>Contacts List</h2>
    <div className={styles.container}>
      
      
      {
        contacts.length ? 
        contacts.map((contact) => (<ContactItem contact={contact} key={contact.id} removeHandler={removeHandler}  />))
        // contacts.map((contact, index) => (<p key={index}>{contact.name}</p>)) 
        : (<p>no contact yet</p>) 
      }
      
    </div>
    </>
  )
}

export default ContactList