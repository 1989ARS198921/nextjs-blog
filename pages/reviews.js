import styles from '../styles/FContact.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'



export  default function FContact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
 name,
 email,
 message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }

  return (
    
    <div className={styles.container}>
      
      < form className={styles.main} >
      <Link href={"/"}>bye bye!!</Link>
        < formGroup className={styles.inputGroup} >
          < label htmlFor='name' ><p>Ваше имя</p></label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
        </formGroup>

        < formGroup className={styles.inputGroup} >
          < label htmlFor='email'><p>Электронная почта или номер телефона</p></label>
          < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
        </formGroup>

        < formGroup className={styles.inputGroup} >
          < label htmlFor='message'><p>Сообщение , возможно пожелание</p></label>
          < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
        </formGroup>

        < input type='submit' onClick={(e)=>{handleSubmit(e)}} />
      </form >
    </div>
    
  )
}