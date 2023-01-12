
import { useForm } from 'react-hook-form';
import '../App.css';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    console.log(process.env.REACT_APP_SERVICE_ID)
    try {
        const templateParams = {
          name,
          email,
          subject,
          message
        };
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        );
        reset();
      } catch (e) {
        console.log(e);
      }
  };

  return (
    <div id="contact" className='contact-container'>
        <h1 className='contact-header'>CONTACT</h1>
              <form className="ContactForm" id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='contact-row-1'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='name-submit'
                      placeholder='Name'
                    ></input>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='email-submit'
                      placeholder='Email address'
                    ></input>
                 </div>
                {/* Row 2 of form */}

                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                {/* Row 3 of form */}
                    <textarea
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
            
                <button className='submit-btn' type='submit'>
                  SUBMIT
                </button>
                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
              </form>
            </div>
  );
};

export default ContactForm;