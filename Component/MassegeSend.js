'use client'


import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Masseagesend.module.css";

export default function MassegeSend() {


    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');

    const handlebtn = async () => {
        if (name != '' && email != '' && subject != '' && message != '') {
            try {
                const res = await fetch("/api", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, subject, message })
                })
                const response = await res.json();
                if (response.success) {
                    setname('');
                    setemail('');
                    setsubject('');
                    setmessage('');
                    toast.success(response.message);
                } else {
                    setname('');
                    setemail('');
                    setsubject('');
                    setmessage('');
                    toast.error(response.message);
                }
            } catch (error) {
                toast.error("Something went wrong!");
            }


        } else {
            toast.warn("Please Enter all filed");
        }
    }

    return (
        <div className={styles.MassegeSendWrp}>
            <ToastContainer />
            <input onChange={(e) => setname(e.target.value)} value={name} name="name" type="text" placeholder="Full Name" />
            <input onChange={(e) => setemail(e.target.value)} value={email} name="email" type="email" placeholder="Email Address" />
            <input onChange={(e) => setsubject(e.target.value)} value={subject} name="subject" type="text" placeholder="Subject" />
            <textarea onChange={(e) => setmessage(e.target.value)} value={message} placeholder="Massege..."></textarea>
            <div className={styles.btnWrp}>
                <button onClick={() => handlebtn()} className={styles.sendBtn}>
                    <span>Send</span>
                    <BsFillSendFill />
                </ button>
            </div>
        </div>
    )
}
