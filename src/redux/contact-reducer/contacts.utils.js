export const addContactToList=(contacts,contactToAdd)=>{
  const existingContatcts =contacts.find(contact=>contact.phoneNo===contactToAdd.phoneNo);
  if(existingContatcts){
    return contacts.map(contact=>(contact.phoneNo===contactToAdd.phoneNo ? {...contact}:contact))
  }
  return [...contacts,...contactToAdd]
}