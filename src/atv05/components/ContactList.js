export default function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    return (
        <section className="contact-list">
            <ul className="remover">
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <br/><button onClick={() => {
                            onSelect(contact);
                        }}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}