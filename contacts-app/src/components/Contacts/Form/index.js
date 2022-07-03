import { useState, useEffect } from "react";


const initialFormValues={fullname:"",phone_number:""};
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(()=>{
    setForm(initialFormValues)
     
  },[contacts])


 /*  useEffect(()=>{
    addContact([...contacts, form]);
     
  },[form]) */

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   

  };
 console.log("form",form)
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);

   
  };
  return (
    <form>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
