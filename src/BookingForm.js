import React, {useEffect} from "react";
import { useFormik } from 'formik';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    VStack,
  } from "@chakra-ui/react";
  import * as Yup from 'yup';
  import useSubmit from './useSubmit';
import {useAlertContext} from './AlertContext';


const BookingForm = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
  
const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        phone: '',
        date: '',
        restTime: ('17.00' | '18:00' | '19:00' | '20:00' | '21:00'),
        guests: ''
    },

    onSubmit: (values, {resetForm}) => {
        formik.setFieldValue('type', values.type || ""); //Fixes issues with empty type
        formik.setSubmitting(true);
        submit("https://example.com/contactme", values)
        .then(() => {
            if (response?.type === 'success') {
                onOpen(
                    'success',
                    `Thank you, ${values.name}! We got your table!`
                );
                resetForm();
            } else {
                onOpen("error", response.message);
            }
        })

        .catch((error) => {
            onOpen("error", error.message);
          })

          .finally(() => {
            formik.setSubmitting(false);
          });

    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string().required("Required"),
      }),
    });

    useEffect(() => {
      }, [response]);

return (
    <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="book-table">
          Book a Table
        </Heading>
        <Box p={6} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                <FormControl isInvalid={formik.touched.name && !!formik.errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("name")}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

              <FormControl isInvalid={formik.touched.phone && !!formik.errors.phone}>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input
                  id="phone"
                  name="phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("phone")}
                />
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.date && !!formik.errors.date}>
                <FormLabel htmlFor="date">Select date</FormLabel>
                <Select 
                id="date" 
                name="date" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                {...formik.getFieldProps("date")}
                >
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.restTime && !!formik.errors.restTime}>
                <FormLabel htmlFor="restTime">Select time</FormLabel>
                <Select 
                id="restTime" 
                name="restTime" 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                {...formik.getFieldProps("restTime")}
                >
                <option value="">Select an option</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </Select>
              </FormControl>
                <Button 
                    type="submit" 
                    colorScheme="purple" 
                    width="full" 
                    isLoading={isLoading}
                    loadingText="Submitting...">
                        Submit
                </Button>
                </VStack>
            </form>
        </Box>
    </VStack>

);
};



//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const data = event.target.data;
//         const value = event.target.value;
//         setInputs(values => ({...values, [data]: value}))
//       }
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs);
//       }

//     return (
//     <form onSubmit={handleSubmit} className='BookingForm' style={{display: "grid", maxWidth: "300px", gap: '20px'}}>
//         <label>Enter your name:</label>
//         <input type='text' data="username" value={inputs.username || ""} 
//         onChange={handleChange}/>
//         <label>Enter your phone number:</label>
//         <inpot type='number' data="number" value={inputs.number || ""} onChange={handleChange}/>
//         <label>Enter Your email:</label>
//         <inpot type='email' data="email" value={inputs.email || ""} onChange={handleChange}/>
//         <label htmlFor="res-date">Choose date</label>
//         <input type="date" id="res-date"/>
//         <label htmlFor="res-time">Choose time</label>
//         <select id="res-time ">
//             <option>17:00</option>
//             <option>18:00</option>
//             <option>19:00</option>
//             <option>20:00</option>
//             <option>21:00</option>
//             <option>22:00</option>
//         </select>
//         <label htmlFor="guests">Number of guests</label>
//         <input type="number" placeholder="1" min="1" max="10" id="guests"/>
//         <label htmlFor="occasion">Occasion</label>
//         <select id="occasion">
//             <option>Birthday</option>
//             <option>Anniversary</option>
//         </select>
//         <input type="submit" value="Make Your reservation"/>
// </form>
//     )
// }

export default BookingForm;